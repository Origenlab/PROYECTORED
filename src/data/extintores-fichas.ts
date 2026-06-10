// src/data/extintores-fichas.ts
// Datos de las 19 fichas de producto de extintores.
// Generado mecánicamente desde las 19 páginas .astro originales (extracción verbatim).
// Renderizado por src/pages/extintores/[tipo]/[modelo].astro

export interface FichaSpec { label: string; value: string }
export interface FichaNavItem { label: string; href: string; active?: boolean }
export interface FichaCardOtro { nombre: string; desc: string; specs: string[]; href: string; img: string }
export interface FichaFaq { pregunta: string; respuesta: string }

export interface FichaExtintor {
  seo: { title: string; description: string };
  breadcrumbs: { label: string; href?: string }[];
  /** Definido en algunas fichas originales pero nunca renderizado; se conserva por fidelidad de datos. */
  heroStats?: { valor: string; label: string }[];
  // ── Hero
  heroBadge: string;
  heroTitle: string; // HTML interior del <h1>
  heroSub: string;
  waHero: string; // payload urlencoded del ?text= de WhatsApp
  btnSecundario: { href: string; label: string };
  heroRight: string; // HTML
  // ── Columna principal
  mainIntro: string; // HTML verbatim: galería + descripción
  specs: FichaSpec[];
  mainResto: string; // HTML verbatim: bloques después de la tabla de specs
  // ── Sidebar
  nav?: { titulo: string; ariaLabel: string; items: FichaNavItem[]; backHref: string; backLabel: string };
  waSidebar: string;
  caracteristicas: string[];
  sidebarCerts?: { titulo: string; html: string };
  sidebarBrands?: { titulo: string; items: string[]; note: string };
  aplicaciones: string[];
  productos: { titulo: string; relacionados?: { nombre: string; href: string }[]; extraHtml: string };
  servicios: { desc?: string; linkLabel: string };
  // ── Otros productos (franja inferior)
  otros?: { titulo: string; sub: string; linkHref: string; linkLabel: string; items: FichaCardOtro[]; ctaCorto?: boolean };
  // ── Cotización y FAQs
  cotizarTitulo: string;
  cotizarPerks: string[];
  waCotizar: string;
  faqSubtitulo: string;
  pageId: string;
  faqs: FichaFaq[];
}

export const FICHAS_EXTINTORES: Record<string, FichaExtintor> = {
  "polvo-seco/pqs-4-5-kg": {
    seo: {
      title: "Extintor PQS ABC 4.5 kg — Polvo Seco Multipropósito Clase A·B·C | Proyecto Red",
      description: "Extintor de polvo químico seco ABC 4.5 kg, el más vendido para oficinas, comercios y locales con acceso al público. Cubre fuegos clase A, B y C. El mínimo que exige Protección Civil. NOM-154-SCFI. Entrega el mismo día en CDMX.",
    },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Extintores", href: "/extintores/" },
      { label: "Polvo Seco PQS", href: "/extintores/polvo-seco/" },
      { label: "PQS ABC 4.5 kg" },
    ],
    heroStats: [
      { valor: "4.5 kg", label: "Capacidad" },
      { valor: "A · B · C", label: "Clases de fuego" },
      { valor: "3–4 m", label: "Alcance" },
    ],
    heroBadge: `Clase A·B·C · Más vendido · NOM-154-SCFI`,
    heroTitle: `Extintor PQS ABC<br><span class="h1-accent">4.5 kg — El más vendido</span>`,
    heroSub: `El extintor de polvo ABC de 4.5 kg es el estándar de cumplimiento para oficinas, comercios y cualquier inmueble con acceso al público. Cubre las tres clases de fuego más comunes (A, B y C) y es la capacidad mínima que exige Protección Civil en la mayoría de los establecimientos.`,
    waHero: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20ABC%204.5%20kg",
    btnSecundario: { href: "/extintores/polvo-seco/", label: "Ver Catálogo PQS" },
    heroRight: `<p>El extintor PQS ABC de 4.5 kg usa <strong>fosfato monoamónico</strong> como agente, capaz de combatir fuegos de <strong>sólidos (Clase A), líquidos inflamables (Clase B) y equipos eléctricos (Clase C)</strong>. Es la solución multipropósito más utilizada en México por su versatilidad y relación costo-cobertura.</p>
        <p>Con un rendimiento típico de <strong>2A:10B:C</strong>, protege áreas de hasta ~200 m² de riesgo ligero. Es la opción que Protección Civil pide como mínimo para oficinas, tiendas, consultorios y locales comerciales con afluencia de personas.</p>`,
    mainIntro: `      <div class="pp-gallery">
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/pqs-4-5kg-extintor-oficinas-comercio.avif?strip=all&lossy=1" alt="Extintor PQS ABC 4.5 kg — Vista frontal polvo químico seco multipropósito" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/galeria-2.avif?strip=all&lossy=1" alt="Extintor PQS ABC 4.5 kg — Detalle válvula y manómetro" width="400" height="300" loading="eager" />
        </div>
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/galeria-3.avif?strip=all&lossy=1" alt="Extintor PQS ABC 4.5 kg — Aplicación profesional" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/extintor-pqs-bodega-industrial-zona-cdmx.avif?strip=all&lossy=1" alt="Extintor PQS ABC 4.5 kg — Instalación en CDMX" width="400" height="300" loading="eager" />
        </div>
      </div>

      <div class="pp-desc">
        <p>El extintor PQS ABC de 4.5 kg es el más solicitado del mercado mexicano. Su agente — fosfato monoamónico — combate las tres clases de fuego más frecuentes en un solo equipo: materiales sólidos (madera, papel, textiles), líquidos inflamables y equipos eléctricos energizados.</p>
        <p>Es la capacidad de referencia para cumplir con Protección Civil en inmuebles con acceso al público. Su tamaño compacto facilita el montaje en pared a la altura reglamentaria y su peso permite que cualquier persona lo opere sin dificultad.</p>
        <p><strong>Capacidad:</strong> 4.5 kg. <strong>Clases:</strong> A, B y C. <strong>Rendimiento:</strong> 2A:10B:C. <strong>Certificación:</strong> NOM-154-SCFI, NOM-100-STPS, NFPA 10.</p>
      </div>

      `,
    specs: [
      { label: "Agente extintor", value: "Fosfato monoamónico (polvo químico seco ABC) presurizado" },
      { label: "Clases de fuego", value: "A (sólidos) · B (líquidos inflamables) · C (equipos eléctricos energizados)" },
      { label: "Capacidad nominal", value: "4.5 kg" },
      { label: "Rendimiento (rating UL)", value: "2A:10B:C" },
      { label: "Tiempo de descarga", value: "~10 segundos" },
      { label: "Alcance efectivo", value: "3–4 metros" },
      { label: "Presión de trabajo", value: "~14 bar con manómetro visual" },
      { label: "Gas propelente", value: "Nitrógeno seco (N₂)" },
      { label: "Temperatura de operación", value: "-20 °C a +60 °C" },
      { label: "Altura del cilindro", value: "~46 cm" },
      { label: "Diámetro del cilindro", value: "~14 cm" },
      { label: "Peso total cargado", value: "~6.5 kg" },
      { label: "Material cilindro", value: "Acero al carbón, pintura electrostática roja" },
      { label: "Válvula", value: "Latón cromado con manómetro y manguera con boquilla" },
      { label: "Certificación", value: "NOM-154-SCFI · NOM-100-STPS · NFPA 10" },
      { label: "Incluye", value: "Manguera de descarga, soporte de pared, etiqueta, collar de garantía" },
      { label: "Mantenimiento", value: "Anual obligatorio conforme a NOM-154-SCFI · Prueba hidrostática c/5 años" }
    ],
    mainResto: `      <section class="pp-block">
        <h2>Características Destacadas</h2>
        <ul class="pp-features">
          <li><strong>Polvo ABC multipropósito</strong> — Un solo equipo cubre fuegos de sólidos, líquidos inflamables y equipos eléctricos, simplificando el inventario de seguridad del inmueble.</li>
<li><strong>Rendimiento 2A:10B:C</strong> — Capacidad de extinción certificada para riesgo ligero, suficiente para la mayoría de oficinas y comercios.</li>
          <li><strong>No conductor sobre equipos energizados</strong> — Seguro para descargar sobre tableros y equipos eléctricos clase C, aunque siempre conviene cortar la energía si es posible.</li>
          <li><strong>Manómetro verificado</strong> — Aguja en zona verde confirma presión operativa con inspección visual rápida y sin herramientas.</li>
          <li><strong>Recargable y certificado</strong> — Cilindro de acero recargable con certificación NOM-154-SCFI; servicio de recarga y prueba hidrostática disponible en CDMX.</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>Aplicaciones</h2>
        <ul class="pp-app-list">
          <li>Oficinas, despachos y consultorios</li>
          <li>Tiendas, comercios y locales con público</li>
          <li>Escuelas, guarderías y aulas</li>
          <li>Restaurantes (área de comedor)</li>
          <li>Departamentos y áreas comunes de edificios</li>
          <li>Vehículos grandes y casas rodantes</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>¿Qué capacidad de PQS ABC necesito?</h2>
        <p>La capacidad correcta depende del tamaño del área, el nivel de riesgo y la cantidad de material combustible:</p>
        <table class="pp-table" style="margin-top:0.75rem;"><tbody>
          <tr><td class="pp-table__label">4.5 kg (2A:10BC)</td><td class="pp-table__value">Oficinas, comercios y locales con público — mínimo de Protección Civil</td></tr>
          <tr><td class="pp-table__label">6 kg (3A:40BC)</td><td class="pp-table__value">Talleres, bodegas pequeñas y manufactura ligera</td></tr>
          <tr><td class="pp-table__label">9 kg (4A:60BC)</td><td class="pp-table__value">Industrial — almacenes, pasillos de carga y maquinaria (NOM-002-STPS)</td></tr>
          <tr><td class="pp-table__label">12 kg (6A:80BC)</td><td class="pp-table__value">Uso intensivo — soldadura, montacargas y líquidos clase B</td></tr>
        </tbody></table>
        <p style="margin-top:0.75rem;">¿No sabes cuál te exige la norma? Hacemos <strong>diagnóstico técnico sin costo</strong> de tu inmueble.</p>
      </section>

      <section class="pp-block">
        <h2>Cumplimiento Normativo</h2>
        <p>Este extintor cumple con la <strong>NOM-154-SCFI</strong> para mantenimiento y recarga, <strong>NOM-100-STPS</strong> para extintores de polvo químico seco y <strong>NFPA 10</strong> como referencia internacional. La <strong>NOM-002-STPS</strong> establece los requerimientos de protección contra incendios en centros de trabajo donde este extintor es exigido.</p>
      </section>

      <section class="pp-block">
        <h2>Resumen de Especificaciones</h2>
        <div class="pp-specs-mini">
          <div class="pp-specs-mini__item"><span>Capacidad</span><span>4.5 kg</span></div>
          <div class="pp-specs-mini__item"><span>Agente</span><span>Polvo ABC</span></div>
          <div class="pp-specs-mini__item"><span>Clases de fuego</span><span>A · B · C</span></div>
          <div class="pp-specs-mini__item"><span>Rendimiento</span><span>2A:10B:C</span></div>
          <div class="pp-specs-mini__item"><span>Alcance</span><span>3–4 m</span></div>
          <div class="pp-specs-mini__item"><span>Certificación</span><span>NOM-154-SCFI</span></div>
        </div>
      </section>

    `,
    nav: {
      titulo: "Extintores PQS",
      ariaLabel: "Categorías de extintores PQS",
      items: [
        { label: "Portátiles (1–2.5 kg)", href: "/extintores/polvo-seco/" },
        { label: "Estándar ABC 4.5 kg", href: "/extintores/polvo-seco/pqs-4-5-kg/", active: true },
        { label: "Estándar ABC 6 kg", href: "/extintores/polvo-seco/pqs-6-kg/" },
        { label: "Industrial 9 kg", href: "/extintores/polvo-seco/pqs-9-kg/" },
        { label: "Alta capacidad 12 kg", href: "/extintores/polvo-seco/pqs-12-kg/" },
        { label: "BC Bicarbonato", href: "/extintores/polvo-seco/pqs-bc-6-kg/" },
        { label: "Rodantes (25–150 kg)", href: "/extintores/polvo-seco/pqs-rodante-150-kg/" }
      ],
      backHref: "/extintores/polvo-seco/",
      backLabel: "← Ver todo el catálogo PQS",
    },
    waSidebar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20ABC%204.5%20kg",
    caracteristicas: [
      "Polvo ABC multipropósito — combate fuegos clase A, B y C en un solo equipo",
      "Rendimiento 2A:10B:C certificado",
      "Manómetro verificado en zona verde incluido",
      "Soporte de pared y collar de garantía NOM-154-SCFI",
      "Recargable — servicio de recarga disponible en CDMX"
    ],
    sidebarCerts: { titulo: "Certificaciones", html: `<div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-154-SCFI</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-100-STPS</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-002-STPS</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NFPA</span><span class="sb__cert-name">NFPA 10</span></div>` },
    aplicaciones: [
      "Oficinas, despachos y consultorios",
      "Tiendas, comercios y locales con público",
      "Escuelas, guarderías y aulas",
      "Restaurantes (área de comedor)",
      "Departamentos y áreas comunes de edificios",
      "Vehículos grandes y casas rodantes"
    ],
    productos: {
      titulo: "Productos Relacionados",
      relacionados: [
        { nombre: "PQS ABC 6 kg", href: "/extintores/polvo-seco/pqs-6-kg/" },
        { nombre: "PQS ABC 9 kg", href: "/extintores/polvo-seco/pqs-9-kg/" },
        { nombre: "PQS ABC 12 kg", href: "/extintores/polvo-seco/pqs-12-kg/" }
      ],
      extraHtml: `<li><a href="/extintores/co2/">Extintores CO₂</a></li>
          <li><a href="/extintores/afff/">Extintores AFFF — Espuma</a></li>`,
    },
    servicios: { desc: "Complementa tu compra con mantenimiento y capacitación profesional.", linkLabel: "¿Necesitas más servicios? Ver todos →" },
    otros: {
      titulo: "Otras Capacidades PQS ABC",
      sub: "Elige la capacidad según tu área y nivel de riesgo",
      linkHref: "/extintores/polvo-seco/",
      linkLabel: "Ver todo el catálogo PQS →",
      items: [
        { nombre: "PQS ABC 6 kg", desc: "Estándar para talleres y bodegas pequeñas. Mayor carga para más material combustible.", specs: ['6 kg', '~13 s', '3A:40BC'], href: "/extintores/polvo-seco/pqs-6-kg/", img: "/imagenes/extintores/polvo-seco/pqs-6kg-extintor-taller-bodega.avif" },
        { nombre: "PQS ABC 9 kg", desc: "Industrial: almacenes, pasillos de carga y maquinaria. Requerido por NOM-002-STPS.", specs: ['9 kg', '~18 s', '4A:60BC'], href: "/extintores/polvo-seco/pqs-9-kg/", img: "/imagenes/extintores/polvo-seco/pqs-9kg-extintor-industrial-almacen.avif" },
        { nombre: "PQS ABC 12 kg", desc: "Alta capacidad para soldadura, montacargas y plantas con líquidos clase B.", specs: ['12 kg', '~22 s', '6A:80BC'], href: "/extintores/polvo-seco/pqs-12-kg/", img: "/imagenes/extintores/polvo-seco/pqs-12kg-extintor-alta-capacidad-industrial.avif" }
      ],
    },
    cotizarTitulo: "Cotiza Extintor PQS ABC 4.5 kg",
    cotizarPerks: ["Asesoría técnica sin costo", "Entrega el mismo día en CDMX", "Factura electrónica disponible"],
    waCotizar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20ABC%204.5%20kg",
    faqSubtitulo: "Todo sobre el extintor PQS ABC 4.5 kg",
    pageId: "pqs-4-5-kg",
    faqs: [
      {
        pregunta: "¿Qué tipos de fuego apaga un extintor de polvo ABC?",
        respuesta: "El polvo ABC (fosfato monoamónico) combate las <strong>tres clases de fuego más comunes</strong>: Clase A (sólidos como madera, papel y textiles), Clase B (líquidos inflamables como gasolina, aceites y solventes) y Clase C (equipos eléctricos energizados). Por eso es el extintor multipropósito más usado.",
      },
      {
        pregunta: "¿Por qué el 4.5 kg es el extintor más vendido?",
        respuesta: "Porque es la <strong>capacidad mínima que exige Protección Civil</strong> para inmuebles con acceso al público, cubre las tres clases de fuego (A, B y C) y su tamaño facilita el montaje y la operación. Para una oficina, tienda o local comercial estándar, es la opción que cumple la norma con el mejor balance de cobertura y manejo.",
      },
      {
        pregunta: "¿Cada cuánto requiere mantenimiento?",
        respuesta: "Conforme a <strong>NOM-154-SCFI</strong>, requiere <strong>mantenimiento anual obligatorio</strong> (inspección, verificación de presión, revisión de manguera y etiquetado) y <strong>prueba hidrostática del cilindro cada 5 años</strong>. Proyecto Red ofrece pólizas de mantenimiento preventivo.",
      },
      {
        pregunta: "¿Puedo recargarlo en CDMX?",
        respuesta: "Sí. Ofrecemos <strong>recarga de extintores ABC</strong> en CDMX y Estado de México, con verificación de presión, revisión de manguera y collar de garantía NOM-154-SCFI. Llámanos al <strong>56 2759 6245</strong> o escríbenos por WhatsApp.",
      },
      {
        pregunta: "¿Incluye soporte e instalación?",
        respuesta: "Sí. Se entrega con <strong>soporte de pared</strong> y etiqueta. Te indicamos la altura reglamentaria de montaje y, si lo necesitas, ofrecemos servicio de instalación y señalización del punto de extintor para tu expediente de Protección Civil.",
      }
    ],
  },

  "polvo-seco/pqs-6-kg": {
    seo: {
      title: "Extintor PQS ABC 6 kg — Polvo Seco Clase A·B·C para Talleres y Bodegas | Proyecto Red",
      description: "Extintor de polvo químico seco ABC 6 kg para talleres, bodegas y manufactura ligera. Mayor carga de agente para áreas con más material combustible. Clase A, B y C. NOM-154-SCFI. Entrega en CDMX.",
    },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Extintores", href: "/extintores/" },
      { label: "Polvo Seco PQS", href: "/extintores/polvo-seco/" },
      { label: "PQS ABC 6 kg" },
    ],
    heroStats: [
      { valor: "6 kg", label: "Capacidad" },
      { valor: "A · B · C", label: "Clases de fuego" },
      { valor: "4–5 m", label: "Alcance" },
    ],
    heroBadge: `Clase A·B·C · Talleres y bodegas · NOM-154-SCFI`,
    heroTitle: `Extintor PQS ABC<br><span class="h1-accent">6 kg — Talleres y bodegas</span>`,
    heroSub: `El extintor de polvo ABC de 6 kg sube la carga de agente para áreas con mayor densidad de material combustible: talleres, bodegas pequeñas y plantas de manufactura ligera. Mantiene la cobertura multipropósito A, B y C con mayor tiempo de descarga.`,
    waHero: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20ABC%206%20kg",
    btnSecundario: { href: "/extintores/polvo-seco/", label: "Ver Catálogo PQS" },
    heroRight: `<p>El PQS ABC de 6 kg ofrece <strong>50% más agente que el 4.5 kg</strong>, lo que se traduce en mayor tiempo de descarga y capacidad de extinción para áreas con más carga combustible. Conserva el agente <strong>fosfato monoamónico</strong> multipropósito para fuegos clase A, B y C.</p>
        <p>Con rendimiento <strong>3A:40B:C</strong>, es el estándar para talleres mecánicos, bodegas y manufactura ligera donde el 4.5 kg se queda corto. Equilibra capacidad y manejabilidad sin llegar al peso del 9 kg industrial.</p>`,
    mainIntro: `      <div class="pp-gallery">
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/pqs-6kg-extintor-taller-bodega.avif?strip=all&lossy=1" alt="Extintor PQS ABC 6 kg — Vista frontal polvo químico seco multipropósito" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/galeria-2.avif?strip=all&lossy=1" alt="Extintor PQS ABC 6 kg — Detalle válvula y manómetro" width="400" height="300" loading="eager" />
        </div>
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/galeria-3.avif?strip=all&lossy=1" alt="Extintor PQS ABC 6 kg — Aplicación profesional" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/extintor-pqs-bodega-industrial-zona-cdmx.avif?strip=all&lossy=1" alt="Extintor PQS ABC 6 kg — Instalación en CDMX" width="400" height="300" loading="eager" />
        </div>
      </div>

      <div class="pp-desc">
        <p>El extintor PQS ABC de 6 kg es el siguiente escalón después del 4.5 kg. Su mayor carga de fosfato monoamónico extiende el tiempo de descarga y la capacidad de extinción, ideal para espacios con más material combustible acumulado.</p>
        <p>Es la elección habitual de talleres y bodegas donde un conato puede crecer más rápido por la cantidad de mercancía, lubricantes o materiales presentes. Sigue siendo manejable para montaje en pared y operación por una sola persona.</p>
        <p><strong>Capacidad:</strong> 6 kg. <strong>Clases:</strong> A, B y C. <strong>Rendimiento:</strong> 3A:40B:C. <strong>Certificación:</strong> NOM-154-SCFI, NOM-100-STPS, NFPA 10.</p>
      </div>

      `,
    specs: [
      { label: "Agente extintor", value: "Fosfato monoamónico (polvo químico seco ABC) presurizado" },
      { label: "Clases de fuego", value: "A (sólidos) · B (líquidos inflamables) · C (equipos eléctricos energizados)" },
      { label: "Capacidad nominal", value: "6 kg" },
      { label: "Rendimiento (rating UL)", value: "3A:40B:C" },
      { label: "Tiempo de descarga", value: "~13 segundos" },
      { label: "Alcance efectivo", value: "4–5 metros" },
      { label: "Presión de trabajo", value: "~14 bar con manómetro visual" },
      { label: "Gas propelente", value: "Nitrógeno seco (N₂)" },
      { label: "Temperatura de operación", value: "-20 °C a +60 °C" },
      { label: "Altura del cilindro", value: "~50 cm" },
      { label: "Diámetro del cilindro", value: "~15 cm" },
      { label: "Peso total cargado", value: "~8.5 kg" },
      { label: "Material cilindro", value: "Acero al carbón, pintura electrostática roja" },
      { label: "Válvula", value: "Latón cromado con manómetro y manguera con boquilla" },
      { label: "Certificación", value: "NOM-154-SCFI · NOM-100-STPS · NFPA 10" },
      { label: "Incluye", value: "Manguera de descarga, soporte de pared, etiqueta, collar de garantía" },
      { label: "Mantenimiento", value: "Anual obligatorio conforme a NOM-154-SCFI · Prueba hidrostática c/5 años" }
    ],
    mainResto: `      <section class="pp-block">
        <h2>Características Destacadas</h2>
        <ul class="pp-features">
          <li><strong>Polvo ABC multipropósito</strong> — Un solo equipo cubre fuegos de sólidos, líquidos inflamables y equipos eléctricos, simplificando el inventario de seguridad del inmueble.</li>
<li><strong>Rendimiento 3A:40B:C</strong> — Mayor capacidad de extinción que el 4.5 kg, adecuada para talleres y bodegas con carga combustible media.</li>
          <li><strong>No conductor sobre equipos energizados</strong> — Seguro para descargar sobre tableros y equipos eléctricos clase C, aunque siempre conviene cortar la energía si es posible.</li>
          <li><strong>Manómetro verificado</strong> — Aguja en zona verde confirma presión operativa con inspección visual rápida y sin herramientas.</li>
          <li><strong>Recargable y certificado</strong> — Cilindro de acero recargable con certificación NOM-154-SCFI; servicio de recarga y prueba hidrostática disponible en CDMX.</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>Aplicaciones</h2>
        <ul class="pp-app-list">
          <li>Talleres mecánicos y de mantenimiento</li>
          <li>Bodegas pequeñas y medianas</li>
          <li>Plantas de manufactura ligera</li>
          <li>Comercios grandes y tiendas departamentales</li>
          <li>Cocinas (complemento al Tipo K)</li>
          <li>Áreas de carga y andenes</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>¿Qué capacidad de PQS ABC necesito?</h2>
        <p>La capacidad correcta depende del tamaño del área, el nivel de riesgo y la cantidad de material combustible:</p>
        <table class="pp-table" style="margin-top:0.75rem;"><tbody>
          <tr><td class="pp-table__label">4.5 kg (2A:10BC)</td><td class="pp-table__value">Oficinas, comercios y locales con público — mínimo de Protección Civil</td></tr>
          <tr><td class="pp-table__label">6 kg (3A:40BC)</td><td class="pp-table__value">Talleres, bodegas pequeñas y manufactura ligera</td></tr>
          <tr><td class="pp-table__label">9 kg (4A:60BC)</td><td class="pp-table__value">Industrial — almacenes, pasillos de carga y maquinaria (NOM-002-STPS)</td></tr>
          <tr><td class="pp-table__label">12 kg (6A:80BC)</td><td class="pp-table__value">Uso intensivo — soldadura, montacargas y líquidos clase B</td></tr>
        </tbody></table>
        <p style="margin-top:0.75rem;">¿No sabes cuál te exige la norma? Hacemos <strong>diagnóstico técnico sin costo</strong> de tu inmueble.</p>
      </section>

      <section class="pp-block">
        <h2>Cumplimiento Normativo</h2>
        <p>Este extintor cumple con la <strong>NOM-154-SCFI</strong> para mantenimiento y recarga, <strong>NOM-100-STPS</strong> para extintores de polvo químico seco y <strong>NFPA 10</strong> como referencia internacional. La <strong>NOM-002-STPS</strong> establece los requerimientos de protección contra incendios en centros de trabajo donde este extintor es exigido.</p>
      </section>

      <section class="pp-block">
        <h2>Resumen de Especificaciones</h2>
        <div class="pp-specs-mini">
          <div class="pp-specs-mini__item"><span>Capacidad</span><span>6 kg</span></div>
          <div class="pp-specs-mini__item"><span>Agente</span><span>Polvo ABC</span></div>
          <div class="pp-specs-mini__item"><span>Clases de fuego</span><span>A · B · C</span></div>
          <div class="pp-specs-mini__item"><span>Rendimiento</span><span>3A:40B:C</span></div>
          <div class="pp-specs-mini__item"><span>Alcance</span><span>4–5 m</span></div>
          <div class="pp-specs-mini__item"><span>Certificación</span><span>NOM-154-SCFI</span></div>
        </div>
      </section>

    `,
    nav: {
      titulo: "Extintores PQS",
      ariaLabel: "Categorías de extintores PQS",
      items: [
        { label: "Portátiles (1–2.5 kg)", href: "/extintores/polvo-seco/" },
        { label: "Estándar ABC 4.5 kg", href: "/extintores/polvo-seco/pqs-4-5-kg/" },
        { label: "Estándar ABC 6 kg", href: "/extintores/polvo-seco/pqs-6-kg/", active: true },
        { label: "Industrial 9 kg", href: "/extintores/polvo-seco/pqs-9-kg/" },
        { label: "Alta capacidad 12 kg", href: "/extintores/polvo-seco/pqs-12-kg/" },
        { label: "BC Bicarbonato", href: "/extintores/polvo-seco/pqs-bc-6-kg/" },
        { label: "Rodantes (25–150 kg)", href: "/extintores/polvo-seco/pqs-rodante-150-kg/" }
      ],
      backHref: "/extintores/polvo-seco/",
      backLabel: "← Ver todo el catálogo PQS",
    },
    waSidebar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20ABC%206%20kg",
    caracteristicas: [
      "Polvo ABC multipropósito — combate fuegos clase A, B y C en un solo equipo",
      "Rendimiento 3A:40B:C certificado",
      "Manómetro verificado en zona verde incluido",
      "Soporte de pared y collar de garantía NOM-154-SCFI",
      "Recargable — servicio de recarga disponible en CDMX"
    ],
    sidebarCerts: { titulo: "Certificaciones", html: `<div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-154-SCFI</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-100-STPS</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-002-STPS</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NFPA</span><span class="sb__cert-name">NFPA 10</span></div>` },
    aplicaciones: [
      "Talleres mecánicos y de mantenimiento",
      "Bodegas pequeñas y medianas",
      "Plantas de manufactura ligera",
      "Comercios grandes y tiendas departamentales",
      "Cocinas (complemento al Tipo K)",
      "Áreas de carga y andenes"
    ],
    productos: {
      titulo: "Productos Relacionados",
      relacionados: [
        { nombre: "PQS ABC 4.5 kg", href: "/extintores/polvo-seco/pqs-4-5-kg/" },
        { nombre: "PQS ABC 9 kg", href: "/extintores/polvo-seco/pqs-9-kg/" },
        { nombre: "PQS ABC 12 kg", href: "/extintores/polvo-seco/pqs-12-kg/" }
      ],
      extraHtml: `<li><a href="/extintores/co2/">Extintores CO₂</a></li>
          <li><a href="/extintores/afff/">Extintores AFFF — Espuma</a></li>`,
    },
    servicios: { desc: "Complementa tu compra con mantenimiento y capacitación profesional.", linkLabel: "¿Necesitas más servicios? Ver todos →" },
    otros: {
      titulo: "Otras Capacidades PQS ABC",
      sub: "Elige la capacidad según tu área y nivel de riesgo",
      linkHref: "/extintores/polvo-seco/",
      linkLabel: "Ver todo el catálogo PQS →",
      items: [
        { nombre: "PQS ABC 4.5 kg", desc: "El más vendido para oficinas, comercios y locales con público. Mínimo de Protección Civil.", specs: ['4.5 kg', '~10 s', '2A:10BC'], href: "/extintores/polvo-seco/pqs-4-5-kg/", img: "/imagenes/extintores/polvo-seco/pqs-4-5kg-extintor-oficinas-comercio.avif" },
        { nombre: "PQS ABC 9 kg", desc: "Industrial: almacenes, pasillos de carga y maquinaria. Requerido por NOM-002-STPS.", specs: ['9 kg', '~18 s', '4A:60BC'], href: "/extintores/polvo-seco/pqs-9-kg/", img: "/imagenes/extintores/polvo-seco/pqs-9kg-extintor-industrial-almacen.avif" },
        { nombre: "PQS ABC 12 kg", desc: "Alta capacidad para soldadura, montacargas y plantas con líquidos clase B.", specs: ['12 kg', '~22 s', '6A:80BC'], href: "/extintores/polvo-seco/pqs-12-kg/", img: "/imagenes/extintores/polvo-seco/pqs-12kg-extintor-alta-capacidad-industrial.avif" }
      ],
    },
    cotizarTitulo: "Cotiza Extintor PQS ABC 6 kg",
    cotizarPerks: ["Asesoría técnica sin costo", "Entrega el mismo día en CDMX", "Factura electrónica disponible"],
    waCotizar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20ABC%206%20kg",
    faqSubtitulo: "Todo sobre el extintor PQS ABC 6 kg",
    pageId: "pqs-6-kg",
    faqs: [
      {
        pregunta: "¿Qué tipos de fuego apaga un extintor de polvo ABC?",
        respuesta: "El polvo ABC (fosfato monoamónico) combate las <strong>tres clases de fuego más comunes</strong>: Clase A (sólidos como madera, papel y textiles), Clase B (líquidos inflamables como gasolina, aceites y solventes) y Clase C (equipos eléctricos energizados). Por eso es el extintor multipropósito más usado.",
      },
      {
        pregunta: "¿Cuándo conviene el 6 kg en lugar del 4.5 kg?",
        respuesta: "Cuando el área tiene <strong>mayor densidad de material combustible</strong> — talleres con lubricantes y solventes, bodegas con mercancía, manufactura ligera — el 6 kg da más tiempo de descarga y mayor rendimiento (3A:40BC vs 2A:10BC). Para oficinas y comercios estándar, el 4.5 kg es suficiente.",
      },
      {
        pregunta: "¿Cada cuánto requiere mantenimiento?",
        respuesta: "Conforme a <strong>NOM-154-SCFI</strong>, requiere <strong>mantenimiento anual obligatorio</strong> (inspección, verificación de presión, revisión de manguera y etiquetado) y <strong>prueba hidrostática del cilindro cada 5 años</strong>. Proyecto Red ofrece pólizas de mantenimiento preventivo.",
      },
      {
        pregunta: "¿Puedo recargarlo en CDMX?",
        respuesta: "Sí. Ofrecemos <strong>recarga de extintores ABC</strong> en CDMX y Estado de México, con verificación de presión, revisión de manguera y collar de garantía NOM-154-SCFI. Llámanos al <strong>56 2759 6245</strong> o escríbenos por WhatsApp.",
      },
      {
        pregunta: "¿Incluye soporte e instalación?",
        respuesta: "Sí. Se entrega con <strong>soporte de pared</strong> y etiqueta. Te indicamos la altura reglamentaria de montaje y, si lo necesitas, ofrecemos servicio de instalación y señalización del punto de extintor para tu expediente de Protección Civil.",
      }
    ],
  },

  "polvo-seco/pqs-9-kg": {
    seo: {
      title: "Extintor PQS ABC 9 kg — Polvo Seco Industrial Clase A·B·C | Proyecto Red",
      description: "Extintor de polvo químico seco ABC 9 kg para uso industrial: almacenes, pasillos de carga y áreas de maquinaria. Requerido por NOM-002-STPS en industria. Clase A, B y C. NOM-154-SCFI. CDMX.",
    },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Extintores", href: "/extintores/" },
      { label: "Polvo Seco PQS", href: "/extintores/polvo-seco/" },
      { label: "PQS ABC 9 kg" },
    ],
    heroStats: [
      { valor: "9 kg", label: "Capacidad" },
      { valor: "A · B · C", label: "Clases de fuego" },
      { valor: "4–5 m", label: "Alcance" },
    ],
    heroBadge: `Clase A·B·C · Industrial · NOM-154-SCFI`,
    heroTitle: `Extintor PQS ABC<br><span class="h1-accent">9 kg — Industrial</span>`,
    heroSub: `El extintor de polvo ABC de 9 kg está pensado para riesgo medio-alto en entornos industriales: almacenes con mercancía, pasillos de carga y áreas de maquinaria. Lo exige la NOM-002-STPS en muchos centros de trabajo de manufactura.`,
    waHero: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20ABC%209%20kg",
    btnSecundario: { href: "/extintores/polvo-seco/", label: "Ver Catálogo PQS" },
    heroRight: `<p>El PQS ABC de 9 kg ofrece una <strong>capacidad de extinción industrial</strong> con rendimiento <strong>4A:60B:C</strong>. Su mayor carga de fosfato monoamónico permite controlar conatos en áreas de alto contenido combustible antes de que escalen.</p>
        <p>Es requerido por la <strong>NOM-002-STPS</strong> en muchos centros de trabajo industriales. Se entrega con soporte de pared reforzado e incluye manguera con boquilla para dirigir la descarga con precisión a 4–5 metros.</p>`,
    mainIntro: `      <div class="pp-gallery">
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/pqs-9kg-extintor-industrial-almacen.avif?strip=all&lossy=1" alt="Extintor PQS ABC 9 kg — Vista frontal polvo químico seco multipropósito" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/galeria-2.avif?strip=all&lossy=1" alt="Extintor PQS ABC 9 kg — Detalle válvula y manómetro" width="400" height="300" loading="eager" />
        </div>
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/galeria-3.avif?strip=all&lossy=1" alt="Extintor PQS ABC 9 kg — Aplicación profesional" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/extintor-pqs-bodega-industrial-zona-cdmx.avif?strip=all&lossy=1" alt="Extintor PQS ABC 9 kg — Instalación en CDMX" width="400" height="300" loading="eager" />
        </div>
      </div>

      <div class="pp-desc">
        <p>El extintor PQS ABC de 9 kg entra en el rango industrial. Con rendimiento 4A:60B:C, está diseñado para áreas donde la carga combustible y el riesgo de propagación son mayores: almacenes, líneas de producción y zonas de maquinaria.</p>
        <p>Su mayor capacidad de agente da más segundos de descarga para controlar un conato en superficies amplias. La NOM-002-STPS lo establece como equipamiento en muchos centros de trabajo industriales según el nivel de riesgo del inmueble.</p>
        <p><strong>Capacidad:</strong> 9 kg. <strong>Clases:</strong> A, B y C. <strong>Rendimiento:</strong> 4A:60B:C. <strong>Certificación:</strong> NOM-154-SCFI, NOM-100-STPS, NFPA 10.</p>
      </div>

      `,
    specs: [
      { label: "Agente extintor", value: "Fosfato monoamónico (polvo químico seco ABC) presurizado" },
      { label: "Clases de fuego", value: "A (sólidos) · B (líquidos inflamables) · C (equipos eléctricos energizados)" },
      { label: "Capacidad nominal", value: "9 kg" },
      { label: "Rendimiento (rating UL)", value: "4A:60B:C" },
      { label: "Tiempo de descarga", value: "~18 segundos" },
      { label: "Alcance efectivo", value: "4–5 metros" },
      { label: "Presión de trabajo", value: "~14 bar con manómetro visual" },
      { label: "Gas propelente", value: "Nitrógeno seco (N₂)" },
      { label: "Temperatura de operación", value: "-20 °C a +60 °C" },
      { label: "Altura del cilindro", value: "~57 cm" },
      { label: "Diámetro del cilindro", value: "~17 cm" },
      { label: "Peso total cargado", value: "~12.5 kg" },
      { label: "Material cilindro", value: "Acero al carbón, pintura electrostática roja" },
      { label: "Válvula", value: "Latón cromado con manómetro y manguera con boquilla" },
      { label: "Certificación", value: "NOM-154-SCFI · NOM-100-STPS · NFPA 10" },
      { label: "Incluye", value: "Manguera de descarga, soporte de pared, etiqueta, collar de garantía" },
      { label: "Mantenimiento", value: "Anual obligatorio conforme a NOM-154-SCFI · Prueba hidrostática c/5 años" }
    ],
    mainResto: `      <section class="pp-block">
        <h2>Características Destacadas</h2>
        <ul class="pp-features">
          <li><strong>Polvo ABC multipropósito</strong> — Un solo equipo cubre fuegos de sólidos, líquidos inflamables y equipos eléctricos, simplificando el inventario de seguridad del inmueble.</li>
<li><strong>Rendimiento 4A:60B:C</strong> — Capacidad industrial de extinción para almacenes y áreas de maquinaria con riesgo medio-alto.</li>
          <li><strong>No conductor sobre equipos energizados</strong> — Seguro para descargar sobre tableros y equipos eléctricos clase C, aunque siempre conviene cortar la energía si es posible.</li>
          <li><strong>Manómetro verificado</strong> — Aguja en zona verde confirma presión operativa con inspección visual rápida y sin herramientas.</li>
          <li><strong>Recargable y certificado</strong> — Cilindro de acero recargable con certificación NOM-154-SCFI; servicio de recarga y prueba hidrostática disponible en CDMX.</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>Aplicaciones</h2>
        <ul class="pp-app-list">
          <li>Almacenes y centros de distribución</li>
          <li>Pasillos de carga y zonas de montacargas</li>
          <li>Plantas de manufactura y producción</li>
          <li>Áreas de maquinaria e instalaciones eléctricas</li>
          <li>Talleres industriales y de soldadura</li>
          <li>Naves industriales y bodegas de alto volumen</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>¿Qué capacidad de PQS ABC necesito?</h2>
        <p>La capacidad correcta depende del tamaño del área, el nivel de riesgo y la cantidad de material combustible:</p>
        <table class="pp-table" style="margin-top:0.75rem;"><tbody>
          <tr><td class="pp-table__label">4.5 kg (2A:10BC)</td><td class="pp-table__value">Oficinas, comercios y locales con público — mínimo de Protección Civil</td></tr>
          <tr><td class="pp-table__label">6 kg (3A:40BC)</td><td class="pp-table__value">Talleres, bodegas pequeñas y manufactura ligera</td></tr>
          <tr><td class="pp-table__label">9 kg (4A:60BC)</td><td class="pp-table__value">Industrial — almacenes, pasillos de carga y maquinaria (NOM-002-STPS)</td></tr>
          <tr><td class="pp-table__label">12 kg (6A:80BC)</td><td class="pp-table__value">Uso intensivo — soldadura, montacargas y líquidos clase B</td></tr>
        </tbody></table>
        <p style="margin-top:0.75rem;">¿No sabes cuál te exige la norma? Hacemos <strong>diagnóstico técnico sin costo</strong> de tu inmueble.</p>
      </section>

      <section class="pp-block">
        <h2>Cumplimiento Normativo</h2>
        <p>Este extintor cumple con la <strong>NOM-154-SCFI</strong> para mantenimiento y recarga, <strong>NOM-100-STPS</strong> para extintores de polvo químico seco y <strong>NFPA 10</strong> como referencia internacional. La <strong>NOM-002-STPS</strong> establece los requerimientos de protección contra incendios en centros de trabajo donde este extintor es exigido.</p>
      </section>

      <section class="pp-block">
        <h2>Resumen de Especificaciones</h2>
        <div class="pp-specs-mini">
          <div class="pp-specs-mini__item"><span>Capacidad</span><span>9 kg</span></div>
          <div class="pp-specs-mini__item"><span>Agente</span><span>Polvo ABC</span></div>
          <div class="pp-specs-mini__item"><span>Clases de fuego</span><span>A · B · C</span></div>
          <div class="pp-specs-mini__item"><span>Rendimiento</span><span>4A:60B:C</span></div>
          <div class="pp-specs-mini__item"><span>Alcance</span><span>4–5 m</span></div>
          <div class="pp-specs-mini__item"><span>Certificación</span><span>NOM-154-SCFI</span></div>
        </div>
      </section>

    `,
    nav: {
      titulo: "Extintores PQS",
      ariaLabel: "Categorías de extintores PQS",
      items: [
        { label: "Portátiles (1–2.5 kg)", href: "/extintores/polvo-seco/" },
        { label: "Estándar ABC 4.5 kg", href: "/extintores/polvo-seco/pqs-4-5-kg/" },
        { label: "Estándar ABC 6 kg", href: "/extintores/polvo-seco/pqs-6-kg/" },
        { label: "Industrial 9 kg", href: "/extintores/polvo-seco/pqs-9-kg/", active: true },
        { label: "Alta capacidad 12 kg", href: "/extintores/polvo-seco/pqs-12-kg/" },
        { label: "BC Bicarbonato", href: "/extintores/polvo-seco/pqs-bc-6-kg/" },
        { label: "Rodantes (25–150 kg)", href: "/extintores/polvo-seco/pqs-rodante-150-kg/" }
      ],
      backHref: "/extintores/polvo-seco/",
      backLabel: "← Ver todo el catálogo PQS",
    },
    waSidebar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20ABC%209%20kg",
    caracteristicas: [
      "Polvo ABC multipropósito — combate fuegos clase A, B y C en un solo equipo",
      "Rendimiento 4A:60B:C certificado",
      "Manómetro verificado en zona verde incluido",
      "Soporte de pared y collar de garantía NOM-154-SCFI",
      "Recargable — servicio de recarga disponible en CDMX"
    ],
    sidebarCerts: { titulo: "Certificaciones", html: `<div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-154-SCFI</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-100-STPS</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-002-STPS</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NFPA</span><span class="sb__cert-name">NFPA 10</span></div>` },
    aplicaciones: [
      "Almacenes y centros de distribución",
      "Pasillos de carga y zonas de montacargas",
      "Plantas de manufactura y producción",
      "Áreas de maquinaria e instalaciones eléctricas",
      "Talleres industriales y de soldadura",
      "Naves industriales y bodegas de alto volumen"
    ],
    productos: {
      titulo: "Productos Relacionados",
      relacionados: [
        { nombre: "PQS ABC 4.5 kg", href: "/extintores/polvo-seco/pqs-4-5-kg/" },
        { nombre: "PQS ABC 6 kg", href: "/extintores/polvo-seco/pqs-6-kg/" },
        { nombre: "PQS ABC 12 kg", href: "/extintores/polvo-seco/pqs-12-kg/" }
      ],
      extraHtml: `<li><a href="/extintores/co2/">Extintores CO₂</a></li>
          <li><a href="/extintores/afff/">Extintores AFFF — Espuma</a></li>`,
    },
    servicios: { desc: "Complementa tu compra con mantenimiento y capacitación profesional.", linkLabel: "¿Necesitas más servicios? Ver todos →" },
    otros: {
      titulo: "Otras Capacidades PQS ABC",
      sub: "Elige la capacidad según tu área y nivel de riesgo",
      linkHref: "/extintores/polvo-seco/",
      linkLabel: "Ver todo el catálogo PQS →",
      items: [
        { nombre: "PQS ABC 4.5 kg", desc: "El más vendido para oficinas, comercios y locales con público. Mínimo de Protección Civil.", specs: ['4.5 kg', '~10 s', '2A:10BC'], href: "/extintores/polvo-seco/pqs-4-5-kg/", img: "/imagenes/extintores/polvo-seco/pqs-4-5kg-extintor-oficinas-comercio.avif" },
        { nombre: "PQS ABC 6 kg", desc: "Estándar para talleres y bodegas pequeñas. Mayor carga para más material combustible.", specs: ['6 kg', '~13 s', '3A:40BC'], href: "/extintores/polvo-seco/pqs-6-kg/", img: "/imagenes/extintores/polvo-seco/pqs-6kg-extintor-taller-bodega.avif" },
        { nombre: "PQS ABC 12 kg", desc: "Alta capacidad para soldadura, montacargas y plantas con líquidos clase B.", specs: ['12 kg', '~22 s', '6A:80BC'], href: "/extintores/polvo-seco/pqs-12-kg/", img: "/imagenes/extintores/polvo-seco/pqs-12kg-extintor-alta-capacidad-industrial.avif" }
      ],
    },
    cotizarTitulo: "Cotiza Extintor PQS ABC 9 kg",
    cotizarPerks: ["Asesoría técnica sin costo", "Entrega el mismo día en CDMX", "Factura electrónica disponible"],
    waCotizar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20ABC%209%20kg",
    faqSubtitulo: "Todo sobre el extintor PQS ABC 9 kg",
    pageId: "pqs-9-kg",
    faqs: [
      {
        pregunta: "¿Qué tipos de fuego apaga un extintor de polvo ABC?",
        respuesta: "El polvo ABC (fosfato monoamónico) combate las <strong>tres clases de fuego más comunes</strong>: Clase A (sólidos como madera, papel y textiles), Clase B (líquidos inflamables como gasolina, aceites y solventes) y Clase C (equipos eléctricos energizados). Por eso es el extintor multipropósito más usado.",
      },
      {
        pregunta: "¿El extintor de 9 kg es obligatorio en industria?",
        respuesta: "Depende del nivel de riesgo del centro de trabajo. La <strong>NOM-002-STPS</strong> establece la cantidad y capacidad de extintores según la superficie y el riesgo de incendio. En almacenes, plantas y áreas de maquinaria, el 9 kg es habitual por su mayor rendimiento (4A:60BC). Hacemos el diagnóstico técnico sin costo para determinar exactamente qué exige tu inmueble.",
      },
      {
        pregunta: "¿Cada cuánto requiere mantenimiento?",
        respuesta: "Conforme a <strong>NOM-154-SCFI</strong>, requiere <strong>mantenimiento anual obligatorio</strong> (inspección, verificación de presión, revisión de manguera y etiquetado) y <strong>prueba hidrostática del cilindro cada 5 años</strong>. Proyecto Red ofrece pólizas de mantenimiento preventivo.",
      },
      {
        pregunta: "¿Puedo recargarlo en CDMX?",
        respuesta: "Sí. Ofrecemos <strong>recarga de extintores ABC</strong> en CDMX y Estado de México, con verificación de presión, revisión de manguera y collar de garantía NOM-154-SCFI. Llámanos al <strong>56 2759 6245</strong> o escríbenos por WhatsApp.",
      },
      {
        pregunta: "¿Incluye soporte e instalación?",
        respuesta: "Sí. Se entrega con <strong>soporte de pared</strong> y etiqueta. Te indicamos la altura reglamentaria de montaje y, si lo necesitas, ofrecemos servicio de instalación y señalización del punto de extintor para tu expediente de Protección Civil.",
      }
    ],
  },

  "polvo-seco/pqs-12-kg": {
    seo: {
      title: "Extintor PQS ABC 12 kg — Polvo Seco Alta Capacidad Clase A·B·C | Proyecto Red",
      description: "Extintor de polvo químico seco ABC 12 kg de alta capacidad para uso industrial intensivo: soldadura, montacargas y plantas con líquidos clase B. Clase A, B y C. NOM-154-SCFI. CDMX y Edomex.",
    },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Extintores", href: "/extintores/" },
      { label: "Polvo Seco PQS", href: "/extintores/polvo-seco/" },
      { label: "PQS ABC 12 kg" },
    ],
    heroStats: [
      { valor: "12 kg", label: "Capacidad" },
      { valor: "A · B · C", label: "Clases de fuego" },
      { valor: "5–6 m", label: "Alcance" },
    ],
    heroBadge: `Clase A·B·C · Alta capacidad · NOM-154-SCFI`,
    heroTitle: `Extintor PQS ABC<br><span class="h1-accent">12 kg — Alta capacidad</span>`,
    heroSub: `El extintor de polvo ABC de 12 kg es la mayor capacidad portátil de la línea estándar. Para uso industrial intensivo: talleres de soldadura, montacargas y plantas con presencia de líquidos clase B. Suele montarse en gabinete metálico visible.`,
    waHero: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20ABC%2012%20kg",
    btnSecundario: { href: "/extintores/polvo-seco/", label: "Ver Catálogo PQS" },
    heroRight: `<p>El PQS ABC de 12 kg entrega el <strong>mayor rendimiento de la línea portátil estándar (6A:80B:C)</strong>. Con su gran carga de fosfato monoamónico, controla conatos en áreas industriales de alta densidad combustible antes de requerir equipos rodantes.</p>
        <p>Es la capacidad de elección para <strong>uso industrial intensivo</strong>: soldadura, montacargas, plantas con líquidos inflamables. Por su peso, se recomienda montaje en gabinete metálico visible y revisión semestral del estado del cilindro.</p>`,
    mainIntro: `      <div class="pp-gallery">
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/pqs-12kg-extintor-alta-capacidad-industrial.avif?strip=all&lossy=1" alt="Extintor PQS ABC 12 kg — Vista frontal polvo químico seco multipropósito" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/galeria-2.avif?strip=all&lossy=1" alt="Extintor PQS ABC 12 kg — Detalle válvula y manómetro" width="400" height="300" loading="eager" />
        </div>
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/galeria-3.avif?strip=all&lossy=1" alt="Extintor PQS ABC 12 kg — Aplicación profesional" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/extintor-pqs-bodega-industrial-zona-cdmx.avif?strip=all&lossy=1" alt="Extintor PQS ABC 12 kg — Instalación en CDMX" width="400" height="300" loading="eager" />
        </div>
      </div>

      <div class="pp-desc">
        <p>El extintor PQS ABC de 12 kg es la máxima capacidad portátil de la línea estándar antes de pasar a los equipos rodantes. Su rendimiento 6A:80B:C lo hace apto para uso industrial intensivo, donde la cantidad de material combustible exige más agente disponible.</p>
        <p>Por su peso cargado (~16.5 kg), normalmente se instala en gabinete metálico visible y de fácil acceso. Es la opción para talleres de soldadura, áreas de montacargas y plantas con presencia de líquidos inflamables que requieren un equipo de respuesta robusto.</p>
        <p><strong>Capacidad:</strong> 12 kg. <strong>Clases:</strong> A, B y C. <strong>Rendimiento:</strong> 6A:80B:C. <strong>Certificación:</strong> NOM-154-SCFI, NOM-100-STPS, NFPA 10.</p>
      </div>

      `,
    specs: [
      { label: "Agente extintor", value: "Fosfato monoamónico (polvo químico seco ABC) presurizado" },
      { label: "Clases de fuego", value: "A (sólidos) · B (líquidos inflamables) · C (equipos eléctricos energizados)" },
      { label: "Capacidad nominal", value: "12 kg" },
      { label: "Rendimiento (rating UL)", value: "6A:80B:C" },
      { label: "Tiempo de descarga", value: "~22 segundos" },
      { label: "Alcance efectivo", value: "5–6 metros" },
      { label: "Presión de trabajo", value: "~14 bar con manómetro visual" },
      { label: "Gas propelente", value: "Nitrógeno seco (N₂)" },
      { label: "Temperatura de operación", value: "-20 °C a +60 °C" },
      { label: "Altura del cilindro", value: "~62 cm" },
      { label: "Diámetro del cilindro", value: "~18 cm" },
      { label: "Peso total cargado", value: "~16.5 kg" },
      { label: "Material cilindro", value: "Acero al carbón, pintura electrostática roja" },
      { label: "Válvula", value: "Latón cromado con manómetro y manguera con boquilla" },
      { label: "Certificación", value: "NOM-154-SCFI · NOM-100-STPS · NFPA 10" },
      { label: "Incluye", value: "Manguera de descarga, soporte de pared, etiqueta, collar de garantía" },
      { label: "Mantenimiento", value: "Anual obligatorio conforme a NOM-154-SCFI · Prueba hidrostática c/5 años" }
    ],
    mainResto: `      <section class="pp-block">
        <h2>Características Destacadas</h2>
        <ul class="pp-features">
          <li><strong>Polvo ABC multipropósito</strong> — Un solo equipo cubre fuegos de sólidos, líquidos inflamables y equipos eléctricos, simplificando el inventario de seguridad del inmueble.</li>
<li><strong>Rendimiento 6A:80B:C</strong> — La mayor capacidad portátil estándar, para uso industrial intensivo antes del equipo rodante.</li>
          <li><strong>No conductor sobre equipos energizados</strong> — Seguro para descargar sobre tableros y equipos eléctricos clase C, aunque siempre conviene cortar la energía si es posible.</li>
          <li><strong>Manómetro verificado</strong> — Aguja en zona verde confirma presión operativa con inspección visual rápida y sin herramientas.</li>
          <li><strong>Recargable y certificado</strong> — Cilindro de acero recargable con certificación NOM-154-SCFI; servicio de recarga y prueba hidrostática disponible en CDMX.</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>Aplicaciones</h2>
        <ul class="pp-app-list">
          <li>Talleres de soldadura y corte</li>
          <li>Áreas de montacargas y maniobras</li>
          <li>Plantas con líquidos inflamables (Clase B)</li>
          <li>Naves industriales de alto volumen</li>
          <li>Estacionamientos y zonas de maquinaria pesada</li>
          <li>Subestaciones y cuartos eléctricos grandes</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>¿Qué capacidad de PQS ABC necesito?</h2>
        <p>La capacidad correcta depende del tamaño del área, el nivel de riesgo y la cantidad de material combustible:</p>
        <table class="pp-table" style="margin-top:0.75rem;"><tbody>
          <tr><td class="pp-table__label">4.5 kg (2A:10BC)</td><td class="pp-table__value">Oficinas, comercios y locales con público — mínimo de Protección Civil</td></tr>
          <tr><td class="pp-table__label">6 kg (3A:40BC)</td><td class="pp-table__value">Talleres, bodegas pequeñas y manufactura ligera</td></tr>
          <tr><td class="pp-table__label">9 kg (4A:60BC)</td><td class="pp-table__value">Industrial — almacenes, pasillos de carga y maquinaria (NOM-002-STPS)</td></tr>
          <tr><td class="pp-table__label">12 kg (6A:80BC)</td><td class="pp-table__value">Uso intensivo — soldadura, montacargas y líquidos clase B</td></tr>
        </tbody></table>
        <p style="margin-top:0.75rem;">¿No sabes cuál te exige la norma? Hacemos <strong>diagnóstico técnico sin costo</strong> de tu inmueble.</p>
      </section>

      <section class="pp-block">
        <h2>Cumplimiento Normativo</h2>
        <p>Este extintor cumple con la <strong>NOM-154-SCFI</strong> para mantenimiento y recarga, <strong>NOM-100-STPS</strong> para extintores de polvo químico seco y <strong>NFPA 10</strong> como referencia internacional. La <strong>NOM-002-STPS</strong> establece los requerimientos de protección contra incendios en centros de trabajo donde este extintor es exigido.</p>
      </section>

      <section class="pp-block">
        <h2>Resumen de Especificaciones</h2>
        <div class="pp-specs-mini">
          <div class="pp-specs-mini__item"><span>Capacidad</span><span>12 kg</span></div>
          <div class="pp-specs-mini__item"><span>Agente</span><span>Polvo ABC</span></div>
          <div class="pp-specs-mini__item"><span>Clases de fuego</span><span>A · B · C</span></div>
          <div class="pp-specs-mini__item"><span>Rendimiento</span><span>6A:80B:C</span></div>
          <div class="pp-specs-mini__item"><span>Alcance</span><span>5–6 m</span></div>
          <div class="pp-specs-mini__item"><span>Certificación</span><span>NOM-154-SCFI</span></div>
        </div>
      </section>

    `,
    nav: {
      titulo: "Extintores PQS",
      ariaLabel: "Categorías de extintores PQS",
      items: [
        { label: "Portátiles (1–2.5 kg)", href: "/extintores/polvo-seco/" },
        { label: "Estándar ABC 4.5 kg", href: "/extintores/polvo-seco/pqs-4-5-kg/" },
        { label: "Estándar ABC 6 kg", href: "/extintores/polvo-seco/pqs-6-kg/" },
        { label: "Industrial 9 kg", href: "/extintores/polvo-seco/pqs-9-kg/" },
        { label: "Alta capacidad 12 kg", href: "/extintores/polvo-seco/pqs-12-kg/", active: true },
        { label: "BC Bicarbonato", href: "/extintores/polvo-seco/pqs-bc-6-kg/" },
        { label: "Rodantes (25–150 kg)", href: "/extintores/polvo-seco/pqs-rodante-150-kg/" }
      ],
      backHref: "/extintores/polvo-seco/",
      backLabel: "← Ver todo el catálogo PQS",
    },
    waSidebar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20ABC%2012%20kg",
    caracteristicas: [
      "Polvo ABC multipropósito — combate fuegos clase A, B y C en un solo equipo",
      "Rendimiento 6A:80B:C certificado",
      "Manómetro verificado en zona verde incluido",
      "Soporte de pared y collar de garantía NOM-154-SCFI",
      "Recargable — servicio de recarga disponible en CDMX"
    ],
    sidebarCerts: { titulo: "Certificaciones", html: `<div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-154-SCFI</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-100-STPS</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-002-STPS</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NFPA</span><span class="sb__cert-name">NFPA 10</span></div>` },
    aplicaciones: [
      "Talleres de soldadura y corte",
      "Áreas de montacargas y maniobras",
      "Plantas con líquidos inflamables (Clase B)",
      "Naves industriales de alto volumen",
      "Estacionamientos y zonas de maquinaria pesada",
      "Subestaciones y cuartos eléctricos grandes"
    ],
    productos: {
      titulo: "Productos Relacionados",
      relacionados: [
        { nombre: "PQS ABC 4.5 kg", href: "/extintores/polvo-seco/pqs-4-5-kg/" },
        { nombre: "PQS ABC 6 kg", href: "/extintores/polvo-seco/pqs-6-kg/" },
        { nombre: "PQS ABC 9 kg", href: "/extintores/polvo-seco/pqs-9-kg/" }
      ],
      extraHtml: `<li><a href="/extintores/co2/">Extintores CO₂</a></li>
          <li><a href="/extintores/afff/">Extintores AFFF — Espuma</a></li>`,
    },
    servicios: { desc: "Complementa tu compra con mantenimiento y capacitación profesional.", linkLabel: "¿Necesitas más servicios? Ver todos →" },
    otros: {
      titulo: "Otras Capacidades PQS ABC",
      sub: "Elige la capacidad según tu área y nivel de riesgo",
      linkHref: "/extintores/polvo-seco/",
      linkLabel: "Ver todo el catálogo PQS →",
      items: [
        { nombre: "PQS ABC 4.5 kg", desc: "El más vendido para oficinas, comercios y locales con público. Mínimo de Protección Civil.", specs: ['4.5 kg', '~10 s', '2A:10BC'], href: "/extintores/polvo-seco/pqs-4-5-kg/", img: "/imagenes/extintores/polvo-seco/pqs-4-5kg-extintor-oficinas-comercio.avif" },
        { nombre: "PQS ABC 6 kg", desc: "Estándar para talleres y bodegas pequeñas. Mayor carga para más material combustible.", specs: ['6 kg', '~13 s', '3A:40BC'], href: "/extintores/polvo-seco/pqs-6-kg/", img: "/imagenes/extintores/polvo-seco/pqs-6kg-extintor-taller-bodega.avif" },
        { nombre: "PQS ABC 9 kg", desc: "Industrial: almacenes, pasillos de carga y maquinaria. Requerido por NOM-002-STPS.", specs: ['9 kg', '~18 s', '4A:60BC'], href: "/extintores/polvo-seco/pqs-9-kg/", img: "/imagenes/extintores/polvo-seco/pqs-9kg-extintor-industrial-almacen.avif" }
      ],
    },
    cotizarTitulo: "Cotiza Extintor PQS ABC 12 kg",
    cotizarPerks: ["Asesoría técnica sin costo", "Entrega el mismo día en CDMX", "Factura electrónica disponible"],
    waCotizar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20ABC%2012%20kg",
    faqSubtitulo: "Todo sobre el extintor PQS ABC 12 kg",
    pageId: "pqs-12-kg",
    faqs: [
      {
        pregunta: "¿Qué tipos de fuego apaga un extintor de polvo ABC?",
        respuesta: "El polvo ABC (fosfato monoamónico) combate las <strong>tres clases de fuego más comunes</strong>: Clase A (sólidos como madera, papel y textiles), Clase B (líquidos inflamables como gasolina, aceites y solventes) y Clase C (equipos eléctricos energizados). Por eso es el extintor multipropósito más usado.",
      },
      {
        pregunta: "¿Cuándo conviene un 12 kg en lugar de un rodante?",
        respuesta: "El 12 kg es la <strong>máxima capacidad portátil</strong>: una persona aún puede tomarlo y dirigirse al fuego. Cuando se necesita más agente que el 12 kg o cubrir puntos distantes (refinería, terminal de combustible, gran almacén), se pasa al <strong>extintor rodante (25–150 kg)</strong>. Para talleres y plantas de tamaño medio, el 12 kg es el tope práctico portátil.",
      },
      {
        pregunta: "¿Cada cuánto requiere mantenimiento?",
        respuesta: "Conforme a <strong>NOM-154-SCFI</strong>, requiere <strong>mantenimiento anual obligatorio</strong> (inspección, verificación de presión, revisión de manguera y etiquetado) y <strong>prueba hidrostática del cilindro cada 5 años</strong>. Proyecto Red ofrece pólizas de mantenimiento preventivo.",
      },
      {
        pregunta: "¿Puedo recargarlo en CDMX?",
        respuesta: "Sí. Ofrecemos <strong>recarga de extintores ABC</strong> en CDMX y Estado de México, con verificación de presión, revisión de manguera y collar de garantía NOM-154-SCFI. Llámanos al <strong>56 2759 6245</strong> o escríbenos por WhatsApp.",
      },
      {
        pregunta: "¿Incluye soporte e instalación?",
        respuesta: "Sí. Se entrega con <strong>soporte de pared</strong> y etiqueta. Te indicamos la altura reglamentaria de montaje y, si lo necesitas, ofrecemos servicio de instalación y señalización del punto de extintor para tu expediente de Protección Civil.",
      }
    ],
  },

  "polvo-seco/pqs-20-kg": {
    seo: {
      title: "Extintor PQS ABC 20 kg Portátil — Polvo Seco Alta Capacidad Industrial | Proyecto Red",
      description: "Extintor de polvo seco ABC 20 kg portátil para bodegas industriales, plantas de manufactura y almacenes de distribución. Cubre el gap entre el 12 kg y el rodante. NOM-154-SCFI, NOM-002-STPS, NFPA 10. Entrega en CDMX.",
    },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Extintores", href: "/extintores/" },
      { label: "Polvo Seco PQS", href: "/extintores/polvo-seco/" },
      { label: "PQS ABC 20 kg" },
    ],
    heroStats: [
      { valor: "20 kg", label: "Capacidad" },
      { valor: "A · B · C", label: "Clases de fuego" },
      { valor: "5–6 m", label: "Alcance" },
    ],
    heroBadge: `Clase A · Clase B · Clase C · NOM-154-SCFI`,
    heroTitle: `Extintor PQS ABC<br><span class="h1-accent">20 kg — Alta Capacidad</span>`,
    heroSub: `Polvo seco ABC multiusos de 20 kg para bodegas industriales, naves de manufactura y almacenes de distribución. Cubre el gap entre el extintor de 12 kg y los modelos rodantes — mayor cobertura, una sola persona operando.`,
    waHero: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20ABC%2020%20kg%20portátil",
    btnSecundario: { href: "/extintores/polvo-seco/", label: "Ver Catálogo PQS" },
    heroRight: `<p>El extintor PQS ABC de 20 kg llena un vacío importante en la protección contra incendios de instalaciones industriales medianas y grandes. Mientras el extintor de 12 kg es insuficiente para bodegas de gran dimensión y el rodante de 50 kg o más requiere maniobra con ruedas, el <strong>20 kg portátil</strong> es manejable por un solo brigadista y ofrece más del doble de capacidad que el estándar de 9 kg.</p>
        <p>Utiliza <strong>fosfato monoamónico (ABC)</strong> como agente extintor, lo que lo hace eficaz contra los tres tipos de fuego más comunes en entornos industriales: materiales sólidos (madera, cartón, plástico), líquidos inflamables y equipos eléctricos energizados. Descarga en ~28 segundos con alcance de 5–6 metros bajo presión de nitrógeno seco.</p>`,
    mainIntro: `      <div class="pp-gallery">
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/pqs-12kg-extintor-alta-capacidad-industrial.avif?strip=all&lossy=1" alt="Extintor PQS ABC 20 kg — Vista frontal alta capacidad industrial" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/galeria-2.avif?strip=all&lossy=1" alt="Extintor PQS ABC 20 kg — Detalle válvula y manómetro" width="400" height="300" loading="eager" />
        </div>
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/galeria-3.avif?strip=all&lossy=1" alt="Extintor PQS ABC 20 kg — Aplicación en bodega industrial" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/extintor-pqs-bodega-industrial-zona-cdmx.avif?strip=all&lossy=1" alt="Extintor PQS ABC 20 kg — Instalación en nave industrial CDMX" width="400" height="300" loading="eager" />
        </div>
      </div>

      <div class="pp-desc">
        <p>El extintor PQS ABC de 20 kg es la solución de alta capacidad para instalaciones industriales que superan la cobertura de los modelos de 9 o 12 kg sin requerir el despliegue de un extintor rodante. Con un peso total de aproximadamente <strong>26 kg</strong>, puede ser transportado y operado por un solo brigadista entrenado, lo que lo hace ideal para emergencias en naves de manufactura, bodegas de distribución y plantas de procesamiento.</p>
        <p>Su agente extintor — <strong>fosfato monoamónico (ABC)</strong> — es el estándar de la industria para protección general, capaz de suprimir fuegos de sólidos combustibles, líquidos inflamables y equipos eléctricos energizados. La descarga se realiza bajo presión de nitrógeno seco con una manguera de mayor longitud que facilita el alcance en pasillos y áreas de difícil acceso.</p>
        <p><strong>Capacidad:</strong> 20 kg. <strong>Clases:</strong> A, B y C. <strong>Certificación:</strong> NOM-154-SCFI, NOM-002-STPS, NFPA 10.</p>
      </div>

      `,
    specs: [
      { label: "Agente extintor", value: "Fosfato monoamónico (NH₄H₂PO₄) seco, fluidizado y siliconizado" },
      { label: "Clases de fuego", value: "A (sólidos combustibles) · B (líquidos inflamables) · C (electricidad)" },
      { label: "Capacidad nominal", value: "20 kg" },
      { label: "Tiempo de descarga", value: "~25–30 segundos" },
      { label: "Alcance efectivo", value: "5–6 metros" },
      { label: "Presión de trabajo", value: "10–12 bar con manómetro visual" },
      { label: "Gas propelente", value: "Nitrógeno seco (N₂)" },
      { label: "Temperatura de operación", value: "-20 °C a +60 °C" },
      { label: "Altura del cilindro", value: "~70 cm" },
      { label: "Diámetro del cilindro", value: "~20 cm" },
      { label: "Peso total cargado", value: "~26 kg" },
      { label: "Material cilindro", value: "Acero al carbón, pintura electrostática roja" },
      { label: "Válvula", value: "Latón cromado con manómetro, manguera larga y boquilla de descarga" },
      { label: "Certificación", value: "NOM-154-SCFI · NOM-002-STPS · NFPA 10" },
      { label: "Incluye", value: "Manguera de descarga larga, soporte de pared reforzado, etiqueta, collar de garantía" },
      { label: "Vida útil cilindro", value: "20 años (prueba hidrostática c/5 años)" },
      { label: "Mantenimiento", value: "Anual obligatorio conforme a NOM-154-SCFI" },
    ],
    mainResto: `      <section class="pp-block">
        <h2>Características Destacadas</h2>
        <ul class="pp-features">
          <li><strong>Gap industrial cubierto</strong> — Existe un vacío de cobertura entre el extintor de 12 kg y los modelos rodantes de 25–50 kg. El de 20 kg portátil llena ese espacio con el doble de capacidad del estándar sin requerir ruedas ni dos operadores.</li>
          <li><strong>Fosfato monoamónico ABC multiusos</strong> — Combate eficazmente fuegos de Clase A (madera, papel, cartón, plásticos), Clase B (gasolina, diésel, aceites, solventes) y Clase C (equipos eléctricos energizados hasta los niveles de voltaje establecidos por NFPA 10).</li>
          <li><strong>Una sola persona lo opera</strong> — A diferencia de los extintores rodantes, el de 20 kg es portátil: un brigadista entrenado puede transportarlo y operar sin asistencia adicional en caso de emergencia.</li>
          <li><strong>Manguera de mayor longitud</strong> — La manguera de descarga de mayor diámetro y longitud facilita el alcance a zonas de difícil acceso como interiores de maquinaria, pasillos estrechos o estanterías altas sin acercar el cilindro a la zona de peligro.</li>
          <li><strong>Soporte reforzado incluido</strong> — Cada extintor incluye soporte de pared de anclaje doble diseñado para aguantar el peso de 26 kg de manera segura y accesible conforme a las alturas de instalación de NOM-002-STPS.</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>Aplicaciones</h2>
        <ul class="pp-app-list">
          <li>Bodegas industriales y centros de distribución logística</li>
          <li>Naves de manufactura, ensamble y maquila</li>
          <li>Almacenes de materias primas, cartón e insumos</li>
          <li>Plantas de procesamiento de alimentos y bebidas</li>
          <li>Talleres de mantenimiento y mecánica industrial</li>
          <li>Estacionamientos techados y áreas de carga/descarga</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>Comparativa de Capacidades PQS ABC</h2>
        <p>Elige la capacidad correcta según la dimensión del área y el nivel de riesgo:</p>
        <table class="pp-table" style="margin-top:0.75rem;">
          <tbody>
            <tr><td class="pp-table__label">6 kg</td><td class="pp-table__value">Oficinas, locales, vehículos · 1 persona · ~13 s descarga</td></tr>
            <tr><td class="pp-table__label">9 kg</td><td class="pp-table__value">Talleres medianos, almacenes pequeños · 1 persona · ~18 s descarga</td></tr>
            <tr><td class="pp-table__label">12 kg</td><td class="pp-table__value">Industria media, restaurantes, plantas pequeñas · 1 persona · ~20 s descarga</td></tr>
            <tr><td class="pp-table__label"><strong>20 kg</strong></td><td class="pp-table__value"><strong>Bodegas industriales, naves grandes, manufactura · 1 persona · ~28 s descarga</strong></td></tr>
            <tr><td class="pp-table__label">Rodante 50 kg+</td><td class="pp-table__value">Refinería, aeropuertos, terminales combustible · 2 personas · ruedas</td></tr>
          </tbody>
        </table>
      </section>

      <section class="pp-block">
        <h2>Cumplimiento Normativo</h2>
        <p>Este extintor cumple con la <strong>NOM-154-SCFI</strong> (mantenimiento de extintores), <strong>NOM-002-STPS</strong> (condiciones de seguridad contra incendio en centros de trabajo) y <strong>NFPA 10</strong> como norma técnica de referencia internacional para extintores portátiles. Cada unidad entrega documentación útil para expedientes de Protección Civil, auditorías STPS y verificaciones de pólizas de seguro industrial.</p>
      </section>

      <section class="pp-block">
        <h2>Resumen de Especificaciones</h2>
        <div class="pp-specs-mini">
          <div class="pp-specs-mini__item"><span>Capacidad</span><span>20 kg</span></div>
          <div class="pp-specs-mini__item"><span>Agente</span><span>NH₄H₂PO₄ (Fosfato ABC)</span></div>
          <div class="pp-specs-mini__item"><span>Clases de fuego</span><span>A · B · C</span></div>
          <div class="pp-specs-mini__item"><span>Alcance</span><span>5–6 metros</span></div>
          <div class="pp-specs-mini__item"><span>Certificación</span><span>NOM-154-SCFI</span></div>
          <div class="pp-specs-mini__item"><span>Tipo</span><span>Portátil — 1 operador</span></div>
        </div>
      </section>

    `,
    nav: {
      titulo: "Extintores PQS",
      ariaLabel: "Categorías de extintores PQS",
      items: [
        { label: "Portátiles (1–3 kg)", href: "/extintores/polvo-seco/" },
        { label: "Estándar ABC (4.5–12 kg)", href: "/extintores/polvo-seco/" },
        { label: "PQS 20 kg Portátil", href: "/extintores/polvo-seco/pqs-20-kg/", active: true },
        { label: "PQS BC — Clase B/C", href: "/extintores/polvo-seco/pqs-bc-6-kg/" },
        { label: "Rodantes (150 kg)", href: "/extintores/polvo-seco/pqs-rodante-150-kg/" },
        { label: "Automáticos (techo)", href: "/extintores/polvo-seco/pqs-automatico-4-5-kg/" },
      ],
      backHref: "/extintores/polvo-seco/",
      backLabel: "← Ver todo el catálogo PQS",
    },
    waSidebar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20ABC%2020%20kg%20portátil",
    caracteristicas: [
      "Capacidad 20 kg — cubre áreas industriales que el 12 kg no alcanza sin necesitar un rodante",
      "Fosfato monoamónico ABC: combate fuegos de sólidos, líquidos inflamables y equipos eléctricos",
      "Manómetro en zona verde verificado de fábrica para inspección rápida",
      "Manguera larga de alta presión con boquilla de control de flujo",
      "Collar de garantía NOM-154-SCFI en cada unidad entregada",
    ],
    sidebarCerts: { titulo: "Certificaciones Disponibles", html: `<div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-154-SCFI</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-002-STPS</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-100-STPS</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NFPA</span><span class="sb__cert-name">NFPA 10</span></div>` },
    aplicaciones: [
      "Bodegas industriales y centros de distribución",
      "Naves de manufactura y ensamble",
      "Almacenes de materias primas y producto terminado",
      "Plantas de procesamiento de alimentos",
      "Talleres de mantenimiento industrial",
      "Estacionamientos y áreas de carga y descarga",
    ],
    productos: {
      titulo: "Productos Relacionados",
      relacionados: [
        { nombre: "PQS ABC 12 kg", href: "/extintores/polvo-seco/" },
        { nombre: "PQS BC 6 kg", href: "/extintores/polvo-seco/pqs-bc-6-kg/" },
        { nombre: "PQS Rodante 150 kg", href: "/extintores/polvo-seco/pqs-rodante-150-kg/" },
        { nombre: "PQS Automático 4.5 kg", href: "/extintores/polvo-seco/pqs-automatico-4-5-kg/" },
      ],
      extraHtml: `<li><a href="/extintores/co2/">Extintores CO₂</a></li>
          <li><a href="/extintores/afff/">Extintores AFFF — Espuma</a></li>`,
    },
    servicios: { desc: "Complementa tu compra con mantenimiento y capacitación profesional.", linkLabel: "¿Necesitas más servicios? Ver todos →" },
    otros: {
      titulo: "Otros Extintores PQS Disponibles",
      sub: "Explora más opciones según tu aplicación específica",
      linkHref: "/extintores/polvo-seco/",
      linkLabel: "Ver todo el catálogo PQS →",
      items: [
        { nombre: "PQS ABC 12 kg", desc: "El extintor de alta capacidad para áreas de riesgo elevado en oficinas corporativas y plantas.", specs: ["12 kg", "~20 s", "4–5 m"], href: "/extintores/polvo-seco/", img: "/imagenes/extintores/polvo-seco/pqs-12kg-extintor-alta-capacidad-industrial.avif" },
        { nombre: "PQS BC 6 kg", desc: "Bicarbonato de sodio para fuegos de líquidos inflamables y equipos eléctricos. Menos residuo corrosivo.", specs: ["6 kg", "~13 s", "4–5 m"], href: "/extintores/polvo-seco/pqs-bc-6-kg/", img: "/imagenes/extintores/polvo-seco/pqs-6kg-extintor-taller-bodega.avif" },
        { nombre: "PQS Rodante 150 kg", desc: "Para refinería, aeropuertos y terminales de combustible. Máxima capacidad industrial.", specs: ["150 kg", "~60 s", "Hasta 12 m"], href: "/extintores/polvo-seco/pqs-rodante-150-kg/", img: "/imagenes/extintores/polvo-seco/pqs-rodante-50kg-extintor-planta-industrial.avif" },
        { nombre: "PQS Automático 4.5 kg", desc: "Extinción automática sin intervención humana. Para cuartos eléctricos y espacios ocultos.", specs: ["4.5 kg", "Automático", "68°C / 93°C"], href: "/extintores/polvo-seco/pqs-automatico-4-5-kg/", img: "/imagenes/extintores/polvo-seco/pqs-automatico-techo-cuarto-electrico.avif" },
      ],
      ctaCorto: true,
    },
    cotizarTitulo: "Cotiza Extintor PQS ABC 20 kg",
    cotizarPerks: ["Asesoría técnica sin costo", "Entrega el mismo día en CDMX", "Factura electrónica disponible"],
    waCotizar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20ABC%2020%20kg%20portátil.%20Mi%20nombre%20es%3A",
    faqSubtitulo: "Todo sobre el extintor PQS ABC 20 kg portátil",
    pageId: "pqs-20-kg",
    faqs: [
      {
        pregunta: "¿Por qué necesito un extintor de 20 kg si ya tengo extintores de 12 kg?",
        respuesta: "El extintor de 20 kg cubre situaciones donde el 12 kg no alcanza a controlar el fuego inicial o donde las dimensiones del área requieren mayor capacidad extintora. Conforme a <strong>NFPA 10</strong>, la distancia máxima de viaje a un extintor varía según el riesgo del área: en riesgo extra (bodegas industriales grandes, plantas de manufactura), un solo extintor de 20 kg puede cubrir lo que necesitarías con dos o tres extintores más pequeños, optimizando el número de unidades y facilitando el cumplimiento normativo.",
      },
      {
        pregunta: "¿Cuántas personas se necesitan para operar un extintor de 20 kg?",
        respuesta: "A diferencia de los modelos rodantes, el extintor de 20 kg <strong>es portátil y lo opera una sola persona</strong>. Con un peso total de aproximadamente 26 kg, es manejable para un operador adulto entrenado. Sin embargo, por su peso, se recomienda instalarlo en soporte de pared a no más de 1.5 metros de altura y capacitar a los brigadistas para su manejo correcto.",
      },
      {
        pregunta: "¿Cumple con los requerimientos de la STPS para plantas industriales?",
        respuesta: "Sí. El extintor PQS ABC 20 kg cumple con <strong>NOM-002-STPS</strong> (condiciones de seguridad contra incendio en centros de trabajo), <strong>NOM-154-SCFI</strong> para extintores portátiles y <strong>NFPA 10</strong> como norma técnica de referencia. Cada unidad entrega documentación de cumplimiento útil para expedientes de Protección Civil y auditorías de la STPS.",
      },
      {
        pregunta: "¿Cuánto tiempo tarda en descargarse completamente?",
        respuesta: "El extintor PQS ABC 20 kg descarga su agente en aproximadamente <strong>25 a 30 segundos</strong> de operación continua, con un alcance efectivo de 5 a 6 metros. Durante ese tiempo libera toda la carga de fosfato monoamónico propulsado por nitrógeno seco. En uso real se recomienda aplicar en ráfagas cortas dirigidas a la base de las llamas.",
      },
      {
        pregunta: "¿Requiere mantenimiento especial por su mayor capacidad?",
        respuesta: "El mantenimiento sigue las mismas reglas que cualquier extintor portátil: <strong>inspección visual mensual</strong> por el responsable del área y <strong>mantenimiento anual obligatorio</strong> conforme a NOM-154-SCFI que incluye verificación de presión, revisión de válvula, manguera y boquilla. Cada 5 años se requiere prueba hidrostática del cilindro. Proyecto Red ofrece pólizas de mantenimiento preventivo para flotas de extintores.",
      },
      {
        pregunta: "¿Puedo recargarlo y cuánto cuesta la recarga?",
        respuesta: "Sí. Proyecto Red realiza <strong>recargas de extintores PQS ABC 20 kg</strong> en CDMX y Estado de México. El servicio incluye verificación de presión del cilindro, revisión de válvula y manguera, carga de agente extintor y collar de garantía NOM-154-SCFI. Para precio específico contáctanos por WhatsApp al <strong>56 2759 6245</strong> o llámanos directamente.",
      },
    ],
  },

  "polvo-seco/pqs-bc-6-kg": {
    seo: {
      title: "Extintor PQS BC 6 kg — Polvo Seco Bicarbonato Clase B y C | Proyecto Red",
      description: "Extintor de polvo seco BC 6 kg (bicarbonato de sodio) para fuegos de líquidos inflamables y equipos eléctricos. Ideal para talleres, estaciones de servicio y maquinaria. NOM-154-SCFI. Entrega en CDMX.",
    },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Extintores", href: "/extintores/" },
      { label: "Polvo Seco PQS", href: "/extintores/polvo-seco/" },
      { label: "PQS BC 6 kg" },
    ],
    heroStats: [
      { valor: "6 kg", label: "Capacidad" },
      { valor: "B · C", label: "Clases de fuego" },
      { valor: "4–5 m", label: "Alcance" },
    ],
    heroBadge: `Clase B · Clase C · NOM-154-SCFI`,
    heroTitle: `Extintor PQS BC<br><span class="h1-accent">6 kg — Bicarbonato</span>`,
    heroSub: `Polvo seco BC (bicarbonato de sodio) para fuegos de líquidos inflamables y equipos eléctricos. Menos residuo corrosivo sobre maquinaria que el polvo ABC. El estándar en talleres de soldadura, estaciones de servicio y plantas petroquímicas.`,
    waHero: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20BC%206%20kg%20bicarbonato",
    btnSecundario: { href: "/extintores/polvo-seco/", label: "Ver Catálogo PQS" },
    heroRight: `<p>El extintor PQS BC de 6 kg utiliza <strong>bicarbonato de sodio (NaHCO₃)</strong> como agente extintor, a diferencia del polvo ABC que usa fosfato monoamónico. Esta diferencia es clave: el bicarbonato deja <strong>menos residuo corrosivo</strong> al descargarse, protegiendo mejor los equipos sobre los que actúa.</p>
        <p>Diseñado específicamente para fuegos de <strong>Clase B</strong> (líquidos inflamables como gasolina, diésel, aceites y solventes) y <strong>Clase C</strong> (equipos eléctricos energizados). Es el extintor de elección en estaciones de servicio, talleres mecánicos, cuartos de transformadores y plantas con riesgo de combustibles líquidos.</p>`,
    mainIntro: `      <div class="pp-gallery">
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/pqs-6kg-extintor-taller-bodega.avif?strip=all&lossy=1" alt="Extintor PQS BC 6 kg — Vista frontal polvo bicarbonato de sodio" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/galeria-2.avif?strip=all&lossy=1" alt="Extintor PQS BC 6 kg — Detalle válvula y manómetro" width="400" height="300" loading="eager" />
        </div>
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/galeria-3.avif?strip=all&lossy=1" alt="Extintor PQS BC 6 kg — Aplicación en taller mecánico" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/extintor-pqs-bodega-industrial-zona-cdmx.avif?strip=all&lossy=1" alt="Extintor PQS BC 6 kg — Instalación en planta industrial CDMX" width="400" height="300" loading="eager" />
        </div>
      </div>

      <div class="pp-desc">
        <p>El extintor PQS BC de 6 kg es la alternativa especializada al polvo ABC para situaciones donde el riesgo principal involucra <strong>líquidos inflamables (gasolina, diésel, aceites, solventes)</strong> y equipos eléctricos. El agente — bicarbonato de sodio — actúa sofocando y rompiendo la cadena de reacción del fuego Clase B, sin dejar el residuo corrosivo y pegajoso característico del fosfato monoamónico.</p>
        <p>Es el extintor recomendado cuando la protección de la maquinaria importa tanto como apagar el fuego. En un taller mecánico, una estación de servicio o un cuarto de transformadores, el polvo BC protege el equipo mientras controla el incendio.</p>
        <p><strong>Capacidad:</strong> 6 kg. <strong>Clases:</strong> B y C. <strong>Certificación:</strong> NOM-154-SCFI, NOM-100-STPS, NFPA 10.</p>
      </div>

      `,
    specs: [
      { label: "Agente extintor", value: "Bicarbonato de sodio (NaHCO₃) seco, fluidizado y siliconizado" },
      { label: "Clases de fuego", value: "B (líquidos inflamables) · C (equipos eléctricos energizados)" },
      { label: "Capacidad nominal", value: "6 kg" },
      { label: "Tiempo de descarga", value: "~12–14 segundos" },
      { label: "Alcance efectivo", value: "4–5 metros" },
      { label: "Presión de trabajo", value: "9–12 bar con manómetro visual" },
      { label: "Gas propelente", value: "Nitrógeno seco (N₂)" },
      { label: "Temperatura de operación", value: "-40 °C a +60 °C" },
      { label: "Altura del cilindro", value: "~50 cm" },
      { label: "Diámetro del cilindro", value: "~15 cm" },
      { label: "Peso total cargado", value: "~8.5 kg" },
      { label: "Material cilindro", value: "Acero al carbón, pintura electrostática roja" },
      { label: "Válvula", value: "Latón cromado con manómetro y manguera con boquilla" },
      { label: "Certificación", value: "NOM-154-SCFI · NOM-100-STPS · NFPA 10" },
      { label: "Incluye", value: "Manguera de descarga, soporte de pared, etiqueta, collar de garantía" },
      { label: "Vida útil cilindro", value: "20 años (prueba hidrostática c/5 años)" },
      { label: "Mantenimiento", value: "Anual obligatorio conforme a NOM-154-SCFI" },
    ],
    mainResto: `      <section class="pp-block">
        <h2>Características Destacadas</h2>
        <ul class="pp-features">
          <li><strong>Agente BC — menos residuo corrosivo</strong> — El bicarbonato de sodio no reacciona con los metales ni deja la capa viscosa del fosfato monoamónico, reduciendo daños en maquinaria, tableros y equipos electrónicos.</li>
          <li><strong>Eficacia superior en Clase B</strong> — Para fuegos de líquidos inflamables como gasolina, diésel, aceites y solventes, el bicarbonato de potasio o sodio supera al fosfato monoamónico en velocidad de extinción.</li>
          <li><strong>No conductor eléctrico</strong> — Seguro para descargar directamente sobre equipos eléctricos energizados, tableros de control y motores sin riesgo de electrocución ni daño por conductividad.</li>
          <li><strong>Rango térmico amplio</strong> — Funciona entre -40 °C y +60 °C, adecuado para instalaciones en zonas de temperatura extrema como cámaras frigoríficas, plantas a la intemperie o climas calurosos.</li>
          <li><strong>Manómetro verificado</strong> — Aguja en zona verde confirma presión operativa. Inspección visual rápida y sin herramientas.</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>Aplicaciones</h2>
        <ul class="pp-app-list">
          <li>Talleres mecánicos y de soldadura sobre metales</li>
          <li>Estaciones de servicio (gasolina, diésel, gas LP)</li>
          <li>Cuartos eléctricos, tableros y centros de control</li>
          <li>Plantas de refinación y petroquímica</li>
          <li>Vehículos de transporte de combustibles peligrosos</li>
          <li>Compresores, motores y maquinaria industrial con lubricantes</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>PQS BC vs PQS ABC — ¿Cuál elegir?</h2>
        <p>La elección entre polvo BC y polvo ABC depende del tipo de riesgo y la importancia de proteger los equipos:</p>
        <table class="pp-table" style="margin-top:0.75rem;">
          <tbody>
            <tr><td class="pp-table__label">Clase A (sólidos)</td><td class="pp-table__value">Solo ABC ✓ | BC: No combate fuegos Clase A</td></tr>
            <tr><td class="pp-table__label">Clase B (líquidos)</td><td class="pp-table__value">Ambos eficaces — BC con mayor rapidez en líquidos</td></tr>
            <tr><td class="pp-table__label">Clase C (electricidad)</td><td class="pp-table__value">Ambos no conductores — BC deja menos residuo</td></tr>
            <tr><td class="pp-table__label">Daño a maquinaria</td><td class="pp-table__value">BC: menor daño · ABC: puede causar corrosión</td></tr>
            <tr><td class="pp-table__label">Uso recomendado</td><td class="pp-table__value">BC: talleres, refinación, electricidad · ABC: uso general</td></tr>
          </tbody>
        </table>
      </section>

      <section class="pp-block">
        <h2>Cumplimiento Normativo</h2>
        <p>Este extintor cumple con la <strong>NOM-154-SCFI</strong> para mantenimiento y recarga, <strong>NOM-100-STPS</strong> para extintores de polvo químico seco y <strong>NFPA 10</strong> como norma técnica de referencia internacional. La <strong>NOM-002-STPS</strong> establece los requerimientos de protección contra incendios en centros de trabajo donde este tipo de extintor es exigido.</p>
      </section>

      <section class="pp-block">
        <h2>Resumen de Especificaciones</h2>
        <div class="pp-specs-mini">
          <div class="pp-specs-mini__item"><span>Capacidad</span><span>6 kg</span></div>
          <div class="pp-specs-mini__item"><span>Agente</span><span>NaHCO₃ (Bicarbonato)</span></div>
          <div class="pp-specs-mini__item"><span>Clases de fuego</span><span>B · C</span></div>
          <div class="pp-specs-mini__item"><span>Alcance</span><span>4–5 metros</span></div>
          <div class="pp-specs-mini__item"><span>Certificación</span><span>NOM-154-SCFI</span></div>
          <div class="pp-specs-mini__item"><span>Categoría</span><span>Extintores PQS BC</span></div>
        </div>
      </section>

    `,
    nav: {
      titulo: "Extintores PQS",
      ariaLabel: "Categorías de extintores PQS",
      items: [
        { label: "Portátiles (1–3 kg)", href: "/extintores/polvo-seco/" },
        { label: "Estándar ABC (4.5–12 kg)", href: "/extintores/polvo-seco/" },
        { label: "PQS BC — Clase B/C", href: "/extintores/polvo-seco/pqs-bc-6-kg/", active: true },
        { label: "Rodantes (25–50 kg)", href: "/extintores/polvo-seco/" },
        { label: "Automáticos (techo)", href: "/extintores/polvo-seco/pqs-automatico-4-5-kg/" },
      ],
      backHref: "/extintores/polvo-seco/",
      backLabel: "← Ver todo el catálogo PQS",
    },
    waSidebar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20BC%206%20kg%20bicarbonato",
    caracteristicas: [
      "Agente BC: no deja residuo corrosivo sobre maquinaria ni equipos metálicos",
      "Mayor efectividad que el ABC en fuegos de líquidos inflamables (Clase B)",
      "No conductivo eléctrico — seguro en tableros y equipos energizados",
      "Manómetro verificado en zona verde incluido",
      "Collar de garantía NOM-154-SCFI",
    ],
    sidebarCerts: { titulo: "Certificaciones Disponibles", html: `<div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-154-SCFI</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-100-STPS</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-002-STPS</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NFPA</span><span class="sb__cert-name">NFPA 10</span></div>` },
    aplicaciones: [
      "Talleres mecánicos y de soldadura",
      "Estaciones de servicio (gasolina y diésel)",
      "Cuartos eléctricos y tableros de control",
      "Plantas de refinación y petroquímica",
      "Vehículos de transporte de combustibles",
      "Compresores, motores y maquinaria industrial",
    ],
    productos: {
      titulo: "Productos Relacionados",
      relacionados: [
        { nombre: "PQS ABC 6 kg", href: "/extintores/polvo-seco/" },
        { nombre: "PQS ABC 9 kg", href: "/extintores/polvo-seco/" },
        { nombre: "PQS ABC 12 kg", href: "/extintores/polvo-seco/" },
        { nombre: "PQS 20 kg Portátil", href: "/extintores/polvo-seco/pqs-20-kg/" },
      ],
      extraHtml: `<li><a href="/extintores/co2/">Extintores CO₂</a></li>
          <li><a href="/extintores/afff/">Extintores AFFF — Espuma</a></li>`,
    },
    servicios: { desc: "Complementa tu compra con mantenimiento y capacitación profesional.", linkLabel: "¿Necesitas más servicios? Ver todos →" },
    otros: {
      titulo: "Otros Extintores PQS Disponibles",
      sub: "Explora más opciones según tu aplicación específica",
      linkHref: "/extintores/polvo-seco/",
      linkLabel: "Ver todo el catálogo PQS →",
      items: [
        { nombre: "PQS ABC 6 kg", desc: "El estándar para talleres y bodegas pequeñas. Polvo ABC multiusos para fuegos A, B y C.", specs: ["6 kg", "~13 s", "4–5 m"], href: "/extintores/polvo-seco/", img: "/imagenes/extintores/polvo-seco/pqs-6kg-extintor-taller-bodega.avif" },
        { nombre: "PQS ABC 9 kg", desc: "Para zonas de riesgo medio-alto en almacenes, pasillos de carga y áreas de maquinaria.", specs: ["9 kg", "~18 s", "4–5 m"], href: "/extintores/polvo-seco/", img: "/imagenes/extintores/polvo-seco/pqs-9kg-extintor-industrial-almacen.avif" },
        { nombre: "PQS 20 kg Portátil", desc: "Para bodegas industriales y plantas de manufactura. Cubre el gap entre el 12 kg y el rodante.", specs: ["20 kg", "~28 s", "5–6 m"], href: "/extintores/polvo-seco/pqs-20-kg/", img: "/imagenes/extintores/polvo-seco/pqs-12kg-extintor-alta-capacidad-industrial.avif" },
        { nombre: "PQS Rodante 150 kg", desc: "Para refinería, aeropuertos y terminales de combustible. Máxima capacidad industrial.", specs: ["150 kg", "~60 s", "Hasta 12 m"], href: "/extintores/polvo-seco/pqs-rodante-150-kg/", img: "/imagenes/extintores/polvo-seco/pqs-rodante-50kg-extintor-planta-industrial.avif" },
      ],
      ctaCorto: true,
    },
    cotizarTitulo: "Cotiza Extintor PQS BC 6 kg",
    cotizarPerks: ["Asesoría técnica sin costo", "Entrega el mismo día en CDMX", "Factura electrónica disponible"],
    waCotizar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20BC%206%20kg%20bicarbonato.%20Mi%20nombre%20es%3A",
    faqSubtitulo: "Todo sobre el extintor PQS BC 6 kg",
    pageId: "pqs-bc-6-kg",
    faqs: [
      {
        pregunta: "¿Cuál es la diferencia entre polvo ABC y polvo BC?",
        respuesta: "El polvo <strong>ABC</strong> (fosfato monoamónico) combate fuegos de sólidos, líquidos inflamables y electricidad, pero al descargarse deja un residuo corrosivo y pegajoso que puede dañar maquinaria, contactos eléctricos y equipos sensibles. El polvo <strong>BC</strong> (bicarbonato de sodio) solo combate fuegos clase B y C, pero es mucho más limpio y deja menos residuo corrosivo, protegiendo mejor los equipos sobre los que se descarga.",
      },
      {
        pregunta: "¿Cuándo debo usar PQS BC en lugar de PQS ABC?",
        respuesta: "Usa PQS BC cuando el riesgo principal sea de <strong>líquidos inflamables (Clase B)</strong> o equipos eléctricos (Clase C) y cuando sea importante no dañar la maquinaria o equipo. Por ejemplo: talleres de soldadura, estaciones de servicio, cuartos de transformadores, maquinaria CNC o compresores. Si el área también tiene materiales sólidos combustibles (madera, papel), el ABC es más versátil.",
      },
      {
        pregunta: "¿El extintor BC funciona en equipos eléctricos energizados?",
        respuesta: "Sí. El bicarbonato de sodio es <strong>eléctricamente no conductor</strong>, por lo que es seguro descargarlo sobre equipos eléctricos energizados. Esto lo hace ideal para tableros de control, motores eléctricos y generadores en operación. Sin embargo, siempre que sea posible, corta la energía eléctrica antes de combatir el fuego.",
      },
      {
        pregunta: "¿Puedo recargarlo en CDMX?",
        respuesta: "Sí. Proyecto Red ofrece <strong>servicio de recarga de extintores PQS BC</strong> en CDMX y Estado de México. Cada recarga incluye verificación de presión, revisión de manguera y boquilla, y collar de garantía NOM-154-SCFI. Llámanos al <strong>56 2759 6245</strong> o envíanos un WhatsApp.",
      },
      {
        pregunta: "¿Cada cuánto tiempo requiere mantenimiento?",
        respuesta: "Conforme a <strong>NOM-154-SCFI</strong>, el extintor requiere <strong>mantenimiento anual obligatorio</strong> que incluye inspección visual, verificación de presión, revisión de manguera y etiquetado. Cada <strong>5 años</strong> se requiere prueba hidrostática del cilindro. Proyecto Red ofrece pólizas de mantenimiento preventivo anuales.",
      },
      {
        pregunta: "¿Tiene diferente precio que el PQS ABC?",
        respuesta: "El extintor PQS BC generalmente tiene un precio similar al ABC de la misma capacidad, con ligeras variaciones según fabricante. Para obtener un precio específico contáctanos por WhatsApp o teléfono — respondemos con precio y disponibilidad en menos de 24 horas.",
      },
    ],
  },

  "polvo-seco/pqs-rodante-150-kg": {
    seo: {
      title: "Extintor PQS Rodante 150 kg — Polvo Seco Industrial Refinería y Aeropuertos | Proyecto Red",
      description: "Extintor rodante de polvo seco ABC 150 kg para refinerías, aeropuertos, terminales de combustible y plantas petroquímicas. Alcance hasta 12 m. NOM-002-STPS, NFPA 10, UL 711. Entrega en CDMX.",
    },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Extintores", href: "/extintores/" },
      { label: "Polvo Seco PQS", href: "/extintores/polvo-seco/" },
      { label: "PQS Rodante 150 kg" },
    ],
    heroStats: [
      { valor: "150 kg", label: "Capacidad" },
      { valor: "Hasta 12 m", label: "Alcance" },
      { valor: "~60 s", label: "Descarga" },
    ],
    heroBadge: `150 kg · Hasta 12 m · NOM-002-STPS · NFPA 10`,
    heroTitle: `Extintor PQS Rodante<br><span class="h1-accent">150 kg — Industrial</span>`,
    heroSub: `El mayor extintor de polvo seco de la familia PQS. Para refinerías, aeropuertos, terminales de combustible y plantas petroquímicas donde la capacidad y el alcance son críticos. Manguera de 9 m y alcance hasta 12 metros.`,
    waHero: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20rodante%20150%20kg%20industrial",
    btnSecundario: { href: "/extintores/polvo-seco/", label: "Ver Catálogo PQS" },
    heroRight: `<p>El extintor rodante de 150 kg es la solución de <strong>máxima capacidad</strong> en la línea de polvo seco. Diseñado para instalaciones industriales de alto riesgo donde un incendio de combustibles líquidos puede escalar rápidamente, este extintor entrega 150 kg de agente extintor en 55 a 65 segundos con un alcance de hasta 12 metros gracias a su chiflón de alta presión y manguera de 9 metros.</p>
        <p>Disponible en configuración <strong>ABC (fosfato monoamónico)</strong> para protección general o <strong>Purple K (bicarbonato de potasio)</strong> para instalaciones aeronáuticas y terminales de combustible donde la eficacia en fuegos Clase B es la prioridad. El cilindro de nitrógeno externo garantiza presión de propulsión constante durante toda la descarga, sin caídas de rendimiento.</p>`,
    mainIntro: `      <div class="pp-gallery">
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/pqs-rodante-50kg-extintor-planta-industrial.avif?strip=all&lossy=1" alt="Extintor PQS rodante 150 kg — Vista lateral en planta industrial" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/galeria-2.avif?strip=all&lossy=1" alt="Extintor PQS rodante 150 kg — Detalle manguera y chiflón" width="400" height="300" loading="eager" />
        </div>
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/galeria-3.avif?strip=all&lossy=1" alt="Extintor PQS rodante 150 kg — Ruedas reforzadas y cilindro N₂" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/extintor-pqs-bodega-industrial-zona-cdmx.avif?strip=all&lossy=1" alt="Extintor PQS rodante 150 kg — Posición en terminal de combustible" width="400" height="300" loading="eager" />
        </div>
      </div>

      <div class="pp-desc">
        <p>El extintor PQS rodante de 150 kg representa el nivel más alto de protección contra incendios en la categoría de polvo seco. Con una capacidad de <strong>150 kg (330 lb)</strong> de agente extintor propulsado por un cilindro independiente de nitrógeno seco, este equipo puede suprimir incendios de gran magnitud en instalaciones críticas donde los modelos portátiles son insuficientes para la escala del riesgo.</p>
        <p>Sus <strong>ruedas de acero reforzado</strong> permiten su desplazamiento rápido sobre pavimento industrial, pisos de concreto rugoso y superficies irregulares. La <strong>manguera de 9 metros</strong> y el chiflón de alta presión con lanza ergonómica permiten dirigir el agente extintor con precisión a distancias de hasta 12 metros, manteniendo a los operadores alejados de la zona de peligro inmediato.</p>
        <p><strong>Capacidad:</strong> 150 kg. <strong>Alcance:</strong> Hasta 12 m. <strong>Certificaciones:</strong> NOM-002-STPS, NOM-154-SCFI, NFPA 10, UL 711.</p>
      </div>

      `,
    specs: [
      { label: "Agente extintor", value: "Fosfato monoamónico ABC o Bicarbonato de potasio (Purple K) — según configuración" },
      { label: "Clases de fuego", value: "A · B · C (ABC) — B · C (Purple K)" },
      { label: "Capacidad nominal", value: "150 kg / 330 lb" },
      { label: "Tiempo de descarga", value: "~55–65 segundos" },
      { label: "Alcance efectivo", value: "Hasta 12 metros" },
      { label: "Longitud de manguera", value: "9 metros (30 ft)" },
      { label: "Presión de trabajo", value: "10–14 bar con manómetro visual" },
      { label: "Gas propelente", value: "Cilindro de nitrógeno seco externo (N₂) 55 ft³" },
      { label: "Temperatura de operación", value: "-40 °C a +60 °C" },
      { label: "Altura total del conjunto", value: "~145 cm" },
      { label: "Diámetro del cilindro", value: "~37 cm" },
      { label: "Peso total cargado", value: "~195 kg" },
      { label: "Ruedas", value: "Acero reforzado 36\" × 6\" — aptas para pisos rugosos e industriales" },
      { label: "Material cilindro", value: "Acero al carbón de alta resistencia, pintura electrostática roja" },
      { label: "Válvula y chiflón", value: "Válvula de apertura rápida, manguera de alta presión, chiflón con lanza de descarga" },
      { label: "Certificación", value: "NOM-002-STPS · NOM-154-SCFI · NFPA 10 · UL 711" },
      { label: "Vida útil cilindro", value: "20 años (prueba hidrostática c/5 años)" },
      { label: "Mantenimiento", value: "Anual obligatorio conforme a NOM-154-SCFI" },
    ],
    mainResto: `      <section class="pp-block">
        <h2>Características Destacadas</h2>
        <ul class="pp-features">
          <li><strong>150 kg de agente — máxima cobertura por descarga</strong> — Equivale a más de 16 extintores de 9 kg en una sola unidad desplegable desde un punto estratégico. Diseñado para cubrir áreas de riesgo extra que la norma NFPA 10 clasifica como High Hazard.</li>
          <li><strong>Cilindro de N₂ externo de 55 ft³</strong> — El propelente en cilindro separado garantiza presión de propulsión estable durante toda la descarga sin pérdida de rendimiento al vaciarse el cilindro principal. Esto es crítico en descargas largas donde la presión constante determina el alcance.</li>
          <li><strong>Manguera de 9 metros (30 ft) con chiflón de alta presión</strong> — Permite atacar el fuego desde una distancia de seguridad, fundamental en escenarios con riesgo de explosión secundaria como terminales de combustible, refinerías o hangares de aeropuerto.</li>
          <li><strong>Ruedas de acero industrial</strong> — Diseñadas para desplazamiento rápido sobre pisos industriales de concreto, asfalto, rejillas metálicas y terreno irregular. Su diámetro de 36 pulgadas permite cruzar pequeños obstáculos sin perder movilidad.</li>
          <li><strong>Disponible en ABC o Purple K</strong> — Selecciona el agente extintor según el riesgo específico de la instalación. ABC para protección general, Purple K para máxima eficacia en fuegos de hidrocarburos y cumplimiento con estándares aeronáuticos.</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>Aplicaciones</h2>
        <ul class="pp-app-list">
          <li>Refinerías de petróleo y plantas petroquímicas</li>
          <li>Terminales de almacenamiento y distribución de combustible</li>
          <li>Aeropuertos: hangares, pistas y zonas de abastecimiento de aeronaves</li>
          <li>Plantas generadoras y subestaciones eléctricas de alta potencia</li>
          <li>Puertos y terminales marítimas con carga de hidrocarburos</li>
          <li>Plantas de fraccionamiento y tratamiento de gas</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>Configuración ABC vs Purple K — ¿Cuál elegir?</h2>
        <p>El extintor rodante 150 kg está disponible en dos configuraciones de agente extintor según el tipo de riesgo dominante:</p>
        <table class="pp-table" style="margin-top:0.75rem;">
          <tbody>
            <tr><td class="pp-table__label">Agente ABC</td><td class="pp-table__value">Fosfato monoamónico · Clase A, B y C · Industria general, manufactura, bodegas</td></tr>
            <tr><td class="pp-table__label">Agente Purple K</td><td class="pp-table__value">Bicarbonato de potasio · Clase B y C · Aeronáutica, hidrocarburos, terminales combustible</td></tr>
            <tr><td class="pp-table__label">Eficacia Clase B</td><td class="pp-table__value">Purple K supera en ~2× al ABC en extinciones de líquidos inflamables por kg</td></tr>
            <tr><td class="pp-table__label">Residuo</td><td class="pp-table__value">Purple K deja menos residuo corrosivo sobre maquinaria y estructuras</td></tr>
            <tr><td class="pp-table__label">Normativa aeronáutica</td><td class="pp-table__value">Purple K es el estándar NFPA 11/403 para rescate y extinción en aeropuertos</td></tr>
          </tbody>
        </table>
      </section>

      <section class="pp-block">
        <h2>Cumplimiento Normativo</h2>
        <p>El extintor PQS rodante 150 kg cumple con <strong>NOM-002-STPS</strong> (condiciones de seguridad contra incendio en centros de trabajo de riesgo extra), <strong>NOM-154-SCFI</strong> (mantenimiento de extintores de polvo químico seco), <strong>NFPA 10</strong> como norma de referencia internacional para extintores y <strong>UL 711</strong> para extintores con calificación de agente extintor. En instalaciones aeronáuticas, aplica también la norma <strong>NFPA 403</strong> para manejo de aeronaves y servicios de emergencia en aeropuertos.</p>
      </section>

      <section class="pp-block">
        <h2>Resumen de Especificaciones</h2>
        <div class="pp-specs-mini">
          <div class="pp-specs-mini__item"><span>Capacidad</span><span>150 kg / 330 lb</span></div>
          <div class="pp-specs-mini__item"><span>Agente</span><span>ABC o Purple K</span></div>
          <div class="pp-specs-mini__item"><span>Alcance</span><span>Hasta 12 metros</span></div>
          <div class="pp-specs-mini__item"><span>Manguera</span><span>9 m (30 ft)</span></div>
          <div class="pp-specs-mini__item"><span>Certificación</span><span>NFPA 10 / UL 711</span></div>
          <div class="pp-specs-mini__item"><span>Tipo</span><span>Rodante — 2 operadores</span></div>
        </div>
      </section>

    `,
    nav: {
      titulo: "Extintores PQS",
      ariaLabel: "Categorías de extintores PQS",
      items: [
        { label: "Portátiles (1–3 kg)", href: "/extintores/polvo-seco/" },
        { label: "Estándar ABC (4.5–12 kg)", href: "/extintores/polvo-seco/" },
        { label: "PQS 20 kg Portátil", href: "/extintores/polvo-seco/pqs-20-kg/" },
        { label: "PQS BC — Clase B/C", href: "/extintores/polvo-seco/pqs-bc-6-kg/" },
        { label: "Rodante 150 kg", href: "/extintores/polvo-seco/pqs-rodante-150-kg/", active: true },
        { label: "Automáticos (techo)", href: "/extintores/polvo-seco/pqs-automatico-4-5-kg/" },
      ],
      backHref: "/extintores/polvo-seco/",
      backLabel: "← Ver todo el catálogo PQS",
    },
    waSidebar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20rodante%20150%20kg%20industrial",
    caracteristicas: [
      "150 kg de agente extintor — mayor cobertura de área por descarga en la familia PQS",
      "Manguera de 9 metros que permite atacar el fuego a distancia segura",
      "Ruedas de acero reforzado para desplazamiento en pavimento, pisos industriales y terreno irregular",
      "Cilindro de nitrógeno externo para propulsión constante durante toda la descarga",
      "Chiflón de alta presión con lanza ergonómica para dirección precisa del agente",
    ],
    sidebarCerts: { titulo: "Certificaciones Disponibles", html: `<div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-154-SCFI</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-002-STPS</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NFPA</span><span class="sb__cert-name">NFPA 10</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">UL</span><span class="sb__cert-name">UL 711</span></div>` },
    aplicaciones: [
      "Refinerías y plantas petroquímicas",
      "Terminales de combustible y almacenamiento de hidrocarburos",
      "Aeropuertos (hangares, pistas y abastecimiento de combustible)",
      "Plantas generadoras de energía y subestaciones eléctricas de alta potencia",
      "Puertos y terminales marítimas con carga de combustible",
      "Plantas de tratamiento de gas y fraccionamiento",
    ],
    productos: {
      titulo: "Productos Relacionados",
      relacionados: [
        { nombre: "PQS ABC 20 kg Portátil", href: "/extintores/polvo-seco/pqs-20-kg/" },
        { nombre: "PQS BC 6 kg", href: "/extintores/polvo-seco/pqs-bc-6-kg/" },
        { nombre: "PQS Automático 4.5 kg", href: "/extintores/polvo-seco/pqs-automatico-4-5-kg/" },
        { nombre: "PQS ABC 12 kg", href: "/extintores/polvo-seco/" },
      ],
      extraHtml: `<li><a href="/extintores/co2/">Extintores CO₂</a></li>
          <li><a href="/extintores/afff/">Extintores AFFF — Espuma</a></li>`,
    },
    servicios: { desc: "Complementa tu compra con mantenimiento y capacitación profesional.", linkLabel: "¿Necesitas más servicios? Ver todos →" },
    otros: {
      titulo: "Otros Extintores PQS Disponibles",
      sub: "Explora más opciones según tu aplicación específica",
      linkHref: "/extintores/polvo-seco/",
      linkLabel: "Ver todo el catálogo PQS →",
      items: [
        { nombre: "PQS ABC 20 kg", desc: "Alta capacidad portátil para bodegas industriales y naves de manufactura. Una sola persona.", specs: ["20 kg", "~28 s", "5–6 m"], href: "/extintores/polvo-seco/pqs-20-kg/", img: "/imagenes/extintores/polvo-seco/pqs-12kg-extintor-alta-capacidad-industrial.avif" },
        { nombre: "PQS BC 6 kg", desc: "Bicarbonato de sodio para fuegos de líquidos inflamables y equipos eléctricos. Menos residuo corrosivo.", specs: ["6 kg", "~13 s", "4–5 m"], href: "/extintores/polvo-seco/pqs-bc-6-kg/", img: "/imagenes/extintores/polvo-seco/pqs-6kg-extintor-taller-bodega.avif" },
        { nombre: "PQS Automático 4.5 kg", desc: "Extinción automática sin intervención humana. Para cuartos eléctricos y espacios cerrados.", specs: ["4.5 kg", "Automático", "68°C / 93°C"], href: "/extintores/polvo-seco/pqs-automatico-4-5-kg/", img: "/imagenes/extintores/polvo-seco/pqs-automatico-techo-cuarto-electrico.avif" },
        { nombre: "PQS ABC 9 kg", desc: "Para zonas de riesgo medio-alto en almacenes, pasillos de carga y áreas de maquinaria.", specs: ["9 kg", "~18 s", "4–5 m"], href: "/extintores/polvo-seco/", img: "/imagenes/extintores/polvo-seco/pqs-9kg-extintor-industrial-almacen.avif" },
      ],
      ctaCorto: true,
    },
    cotizarTitulo: "Cotiza Extintor PQS Rodante 150 kg",
    cotizarPerks: ["Asesoría técnica sin costo", "Entrega en CDMX y Zona Metropolitana", "Factura electrónica disponible"],
    waCotizar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20rodante%20150%20kg%20industrial.%20Mi%20nombre%20es%3A",
    faqSubtitulo: "Todo sobre el extintor PQS rodante 150 kg",
    pageId: "pqs-rodante-150-kg",
    faqs: [
      {
        pregunta: "¿En qué industrias es obligatorio un extintor rodante de gran capacidad?",
        respuesta: "Los extintores rodantes de 150 kg son requeridos en instalaciones de <strong>riesgo extra</strong> conforme a NFPA 10 y NOM-002-STPS: refinerías, terminales de almacenamiento de hidrocarburos, aeropuertos (hangares y zonas de abastecimiento), plantas generadoras de energía, puertos con manejo de combustible y plantas petroquímicas. En estos entornos, la cantidad de agente extintor disponible en los modelos portátiles es insuficiente para el nivel de riesgo.",
      },
      {
        pregunta: "¿Cuántas personas se necesitan para operar el extintor rodante?",
        respuesta: "Por protocolo de seguridad industrial, el extintor rodante de 150 kg <strong>requiere al menos dos personas</strong>: una para desplazar y estabilizar el conjunto (cilindro + ruedas + cilindro de N₂) y otra para dirigir la manguera y el chiflón hacia el fuego. A diferencia de los portátiles, el peso total de ~195 kg hace inviable la operación individual. Proyecto Red ofrece <strong>capacitación DC-3</strong> para brigadas que operan este tipo de equipo.",
      },
      {
        pregunta: "¿Cuál es la diferencia entre el modelo ABC y el Purple K en rodantes?",
        respuesta: "El modelo <strong>ABC (fosfato monoamónico)</strong> combate fuegos de sólidos, líquidos inflamables y electricidad — es el más versátil y el más común en instalaciones industriales generales. El modelo <strong>Purple K (bicarbonato de potasio)</strong> está optimizado para fuegos de Clase B en combustibles líquidos, con mayor poder extintor por kilogramo que el fosfato monoamónico. Purple K es el estándar en la industria aeronáutica y en terminales de combustible donde el riesgo dominante son los líquidos inflamables.",
      },
      {
        pregunta: "¿Cuánto alcance tiene la manguera?",
        respuesta: "El extintor rodante 150 kg incluye <strong>9 metros (30 ft) de manguera de alta presión</strong> que permiten al operador atacar el fuego desde una distancia segura. Combinado con el alcance efectivo del chiflón de hasta 12 metros, el operador puede mantenerse hasta 21 metros del foco de fuego durante la descarga — factor crítico en refinerías y zonas con riesgo de explosión secundaria.",
      },
      {
        pregunta: "¿Requiere permiso especial o instalación certificada?",
        respuesta: "El extintor rodante no requiere instalación fija — se ubica en puntos estratégicos definidos en el plano de protección contra incendios del inmueble. Sin embargo, su <strong>ubicación, señalización y accesibilidad</strong> deben cumplir con NOM-002-STPS y el programa de protección civil del establecimiento. Proyecto Red puede realizar el <strong>levantamiento técnico</strong> del inmueble para definir las ubicaciones óptimas conforme a norma.",
      },
      {
        pregunta: "¿Proyecto Red instala y da mantenimiento a extintores rodantes?",
        respuesta: "Sí. Proyecto Red suministra, entrega e instala extintores rodantes en CDMX y Zona Metropolitana, y ofrece <strong>pólizas de mantenimiento preventivo anual</strong> que incluyen verificación del cilindro de N₂, inspección de manguera y chiflón, verificación de presión y etiquetado. También realizamos la <strong>prueba hidrostática</strong> obligatoria cada 5 años conforme a NOM-154-SCFI. Contáctanos al <strong>56 2759 6245</strong>.",
      },
    ],
  },

  "polvo-seco/pqs-automatico-4-5-kg": {
    seo: {
      title: "Extintor PQS Automático 4.5 kg — Activación por Temperatura | Proyecto Red",
      description: "Extintor automático PQS 4.5 kg con bulbo térmico a 68 °C para techos de bodegas, cocinas industriales y cuartos eléctricos. Cumple NOM-154-SCFI. Entrega mismo día CDMX.",
    },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Extintores", href: "/extintores/" },
      { label: "Polvo Seco PQS", href: "/extintores/polvo-seco/" },
      { label: "PQS Automático 4.5 kg" },
    ],
    heroStats: [
      { valor: "4.5 kg", label: "Capacidad" },
      { valor: "68 °C", label: "Activación" },
      { valor: "A·B·C", label: "Clases de fuego" },
    ],
    heroBadge: `Automático · Activación Térmica · NOM-154-SCFI`,
    heroTitle: `Extintor PQS Automático<br><span class="h1-accent">4.5 kg</span>`,
    heroSub: `Extintor de techo con activación automática por bulbo térmico a 68 °C. Diseñado para proteger áreas sin supervisión permanente como bodegas, cuartos de máquinas, cocinas industriales y subestaciones eléctricas. Se activa sin intervención humana al detectar temperatura de incendio.`,
    waHero: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20autom%C3%A1tico%204.5%20kg",
    btnSecundario: { href: "/extintores/polvo-seco/", label: "Ver Catálogo PQS" },
    heroRight: `<p>El extintor automático PQS de 4.5 kg es la primera línea de defensa en espacios donde no hay personal presente las 24 horas. Su bulbo térmico de vidrio se rompe al alcanzar 68 °C, liberando el agente extintor — fosfato monoamónico al 75% — directamente sobre el foco de incendio.</p>
        <p>Cada unidad incluye soporte de techo, herrajes de montaje, manómetro verificado en zona verde y collar de garantía conforme a NOM-154-SCFI. Instalación recomendada entre 2.5 y 4 metros de altura.</p>`,
    mainIntro: `      <div class="pp-gallery">
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/galeria-1.avif?strip=all&lossy=1" alt="Extintor PQS Automático 4.5 kg - Vista frontal con etiqueta NOM-154-SCFI" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/galeria-2.avif?strip=all&lossy=1" alt="Extintor PQS Automático 4.5 kg - Detalle bulbo térmico y manómetro" width="400" height="300" loading="eager" />
        </div>
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/galeria-3.avif?strip=all&lossy=1" alt="Extintor PQS Automático 4.5 kg - Soporte de techo instalado en bodega" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/extintor-pqs-bodega-industrial-zona-cdmx.avif?strip=all&lossy=1" alt="Extintor PQS Automático 4.5 kg - Instalación en nave industrial CDMX" width="400" height="300" loading="eager" />
        </div>
      </div>

      <div class="pp-desc">
        <p>El extintor automático PQS de 4.5 kg es la solución ideal para espacios sin supervisión permanente. Su mecanismo de activación térmica — un <strong>bulbo de vidrio calibrado a 68 °C</strong> — garantiza respuesta inmediata ante un conato de incendio, sin depender de la presencia de personal.</p>
        <p>El agente extintor — <strong>fosfato monoamónico al 75%</strong> — interrumpe la reacción química del fuego en clases A (sólidos), B (líquidos inflamables) y C (equipos eléctricos energizados). La descarga descendente desde el techo cubre un radio de 3 a 4 metros.</p>
        <p><strong>Capacidad:</strong> 4.5 kg. <strong>Activación:</strong> 68 °C. <strong>Certificación:</strong> NOM-154-SCFI, NFPA 10, NFPA 17.</p>
      </div>
      
      `,
    specs: [
      { label: "Agente extintor", value: "Polvo químico seco ABC (fosfato monoamónico 75%)" },
      { label: "Capacidad nominal", value: "4.5 kg" },
      { label: "Clases de fuego", value: "A · B · C" },
      { label: "Mecanismo de activación", value: "Bulbo térmico de vidrio (68 °C / 155 °F)" },
      { label: "Presión de trabajo", value: "12–14 bar (175–195 psi)" },
      { label: "Gas propelente", value: "Nitrógeno seco (N₂)" },
      { label: "Tiempo de descarga", value: "~10 segundos" },
      { label: "Alcance de cobertura", value: "Radio de 3–4 metros (montaje a 3 m de altura)" },
      { label: "Temperatura de operación", value: "-20 °C a +60 °C" },
      { label: "Altura del cilindro", value: "~42 cm" },
      { label: "Peso total cargado", value: "~7 kg" },
      { label: "Material cilindro", value: "Acero al carbón, pintura electrostática roja" },
      { label: "Válvula", value: "Latón cromado con manómetro y bulbo térmico" },
      { label: "Montaje", value: "Soporte de techo con herrajes incluidos" },
      { label: "Altura de instalación", value: "2.5 a 4 metros recomendados" },
      { label: "Certificación", value: "NOM-154-SCFI · NFPA 10 · NFPA 17" },
      { label: "Incluye", value: "Soporte de techo, herrajes, etiqueta, collar de garantía" },
      { label: "Vida útil cilindro", value: "20 años (prueba hidrostática c/5)" },
      { label: "Mantenimiento", value: "Anual obligatorio NOM-154-SCFI" },
    ],
    mainResto: `      <section class="pp-block">
        <h2>Características Destacadas</h2>
        <ul class="pp-features">
          <li><strong>Activación automática a 68 °C</strong> — El bulbo térmico de vidrio se rompe al alcanzar la temperatura de disparo, liberando el agente extintor sin necesidad de que una persona accione el equipo.</li>
          <li><strong>Montaje en techo</strong> — Diseñado para instalarse entre 2.5 y 4 metros de altura. Incluye soporte metálico y herrajes para fijación directa a losa, estructura metálica o plafón.</li>
          <li><strong>Cobertura radial de 3–4 metros</strong> — La descarga descendente cubre un área circular efectiva, ideal para proteger zonas específicas como cuartos eléctricos o campanas de cocina.</li>
          <li><strong>Manómetro verificado</strong> — Aguja en zona verde confirma presión operativa. Inspección visual sin herramientas desde el nivel del suelo.</li>
          <li><strong>Collar de garantía NOM-154</strong> — Sello que certifica que el extintor fue cargado y verificado por personal certificado conforme a norma.</li>
        </ul>
      </section>
      
      <section class="pp-block">
        <h2>Aplicaciones</h2>
        <ul class="pp-app-list">
          <li>Bodegas y almacenes sin personal permanente</li>
          <li>Cuartos de máquinas y subestaciones eléctricas</li>
          <li>Cocinas industriales y campanas extractoras</li>
          <li>Cuartos eléctricos, UPS y centros de datos</li>
          <li>Estacionamientos subterráneos y áreas de carga</li>
          <li>Áreas de producción con riesgo continuo de ignición</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>Instalación y Montaje</h2>
        <p>El extintor automático se instala en posición <strong>invertida (boquilla hacia abajo)</strong> suspendido del techo mediante soporte metálico y herrajes incluidos. La altura recomendada es de <strong>2.5 a 4 metros</strong> sobre el área a proteger. La instalación debe ser realizada por personal capacitado para garantizar la cobertura radial correcta.</p>
      </section>

      <section class="pp-block">
        <h2>Cumplimiento Normativo</h2>
        <p>Este equipo cumple con la <strong>NOM-154-SCFI</strong> para mantenimiento y recarga, <strong>NFPA 10</strong> para extintores portátiles y <strong>NFPA 17</strong> para sistemas de agente seco. La <strong>NOM-002-STPS</strong> establece los lineamientos de prevención de incendios en centros de trabajo donde este tipo de equipo es requerido.</p>
      </section>
      
      <section class="pp-block">
        <h2>Especificaciones Técnicas</h2>
        <div class="pp-specs-mini">
          <div class="pp-specs-mini__item"><span>Capacidad</span><span>4.5 kg</span></div>
          <div class="pp-specs-mini__item"><span>Activación</span><span>68 °C (bulbo térmico)</span></div>
          <div class="pp-specs-mini__item"><span>Certificación</span><span>NOM-154-SCFI, NFPA 10</span></div>
          <div class="pp-specs-mini__item"><span>Clases de fuego</span><span>A · B · C</span></div>
          <div class="pp-specs-mini__item"><span>Categoría</span><span>Extintores Automáticos PQS</span></div>
        </div>
      </section>

    `,
    nav: {
      titulo: "Extintores PQS",
      ariaLabel: "Categorías de extintores PQS",
      items: [
        { label: "Portátiles (1–3 kg)", href: "/extintores/polvo-seco/" },
        { label: "Estándar (4.5–12 kg)", href: "/extintores/polvo-seco/" },
        { label: "Automáticos (techo)", href: "/extintores/polvo-seco/", active: true },
        { label: "Con gabinete", href: "/extintores/polvo-seco/" },
        { label: "Rodantes (25–50 kg)", href: "/extintores/polvo-seco/" },
      ],
      backHref: "/extintores/polvo-seco/",
      backLabel: "← Ver todo el catálogo PQS",
    },
    waSidebar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20autom%C3%A1tico%204.5%20kg",
    caracteristicas: [
      "Activación automática a 68 °C sin intervención humana",
      "Soporte de techo y herrajes de montaje incluidos",
      "Manómetro verificado en zona verde",
      "Collar de garantía NOM-154-SCFI",
    ],
    sidebarCerts: { titulo: "Certificaciones Disponibles", html: `<div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-154-SCFI</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-002-STPS</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NFPA</span><span class="sb__cert-name">NFPA 10</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NFPA</span><span class="sb__cert-name">NFPA 17</span></div>` },
    sidebarBrands: { titulo: "Marcas que Manejamos", items: ["Proyecto Red — Marca propia", "Extintores certificados NOM"], note: "Pregunta por otras marcas" },
    aplicaciones: [
      "Bodegas y almacenes sin personal",
      "Cuartos de máquinas y subestaciones",
      "Cocinas industriales y campanas extractoras",
      "Cuartos eléctricos y centros de datos",
      "Estacionamientos subterráneos",
      "Áreas de producción con riesgo continuo",
    ],
    productos: {
      titulo: "Productos Relacionados",
      relacionados: [
        { nombre: "PQS Automático 6 kg", href: "/extintores/polvo-seco/pqs-automatico-6-kg/" },
        { nombre: "PQS 4.5 kg Portátil", href: "/extintores/polvo-seco/" },
        { nombre: "PQS 6 kg Estándar", href: "/extintores/polvo-seco/" },
        { nombre: "PQS 4.5 kg Gabinete", href: "/extintores/polvo-seco/" },
      ],
      extraHtml: `<li><a href="/extintores/co2/">Extintores CO₂</a></li>
          <li><a href="/extintores/tipo-k/">Extintores Tipo K</a></li>`,
    },
    servicios: { desc: "Complementa tu compra con mantenimiento y capacitación profesional.", linkLabel: "¿Necesitas más servicios? Ver todos →" },
    otros: {
      titulo: "Otros Extintores PQS Disponibles",
      sub: "Explora más opciones según tu aplicación específica",
      linkHref: "/extintores/polvo-seco/",
      linkLabel: "Ver todo el catálogo PQS →",
      items: [
        { nombre: "PQS Automático 6 kg", desc: "Mayor capacidad para áreas de riesgo elevado. Mismo mecanismo de activación térmica con cobertura ampliada.", specs: ["6 kg", "68 °C", "4–5 m"], href: "/extintores/polvo-seco/pqs-automatico-6-kg/", img: "/imagenes/extintores/polvo-seco.avif" },
        { nombre: "PQS 4.5 kg — Oficinas", desc: "Versión portátil manual del mismo agente y capacidad. Para áreas con personal presente.", specs: ["4.5 kg", "~10 s", "3–4 m"], href: "/extintores/polvo-seco/", img: "/imagenes/extintores/polvo-seco.avif" },
        { nombre: "PQS 4.5 kg Gabinete", desc: "Extintor de 4.5 kg con gabinete metálico para montaje en pared. Protección y accesibilidad.", specs: ["4.5 kg", "Gabinete", "NOM-154"], href: "/extintores/polvo-seco/", img: "/imagenes/extintores/polvo-seco.avif" },
        { nombre: "PQS 9 kg — Almacenes", desc: "Para zonas de riesgo medio-alto con maquinaria y mercancía almacenada.", specs: ["9 kg", "~18 s", "4–5 m"], href: "/extintores/polvo-seco/", img: "/imagenes/extintores/polvo-seco.avif" },
      ],
      ctaCorto: true,
    },
    cotizarTitulo: "Cotiza Extintor PQS Automático 4.5 kg",
    cotizarPerks: ["Asesoría técnica sin costo", "Entrega el mismo día en CDMX", "Factura electrónica disponible"],
    waCotizar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20autom%C3%A1tico%204.5%20kg.%20Mi%20nombre%20es%3A",
    faqSubtitulo: "Todo sobre el extintor automático PQS 4.5 kg",
    pageId: "pqs-automatico-4-5-kg",
    faqs: [
      {
        pregunta: "¿Cómo funciona el extintor automático?",
        respuesta: "El extintor se monta invertido en el techo. Cuando la temperatura alcanza <strong>68 °C</strong>, el bulbo térmico de vidrio se rompe por dilatación del líquido interno, liberando el agente extintor por gravedad y presión sobre el foco de incendio. No requiere electricidad ni intervención manual.",
      },
      {
        pregunta: "¿A qué altura se instala?",
        respuesta: "La altura recomendada es de <strong>2.5 a 4 metros</strong> sobre el área a proteger. A 3 metros de altura, la descarga cubre un radio efectivo de 3 a 4 metros. La instalación debe considerar la geometría del espacio y posibles obstrucciones.",
      },
      {
        pregunta: "¿Se puede usar en cocinas industriales?",
        respuesta: "Sí, es una de sus aplicaciones principales. Se instala sobre la <strong>campana extractora</strong> o sobre la línea de fuego para proteger freidoras, parrillas y estufas. Sin embargo, para fuegos clase K (aceites de cocina), el extintor Tipo K ofrece mejor desempeño específico.",
      },
      {
        pregunta: "¿Cada cuánto se revisa el extintor automático?",
        respuesta: "La <strong>NOM-154-SCFI</strong> exige <strong>mantenimiento anual obligatorio</strong> que incluye inspección visual del bulbo térmico, verificación de presión en manómetro, revisión de herrajes de montaje y etiquetado. Cada <strong>5 años</strong> se requiere prueba hidrostática.",
      },
      {
        pregunta: "¿Qué pasa si el bulbo se rompe accidentalmente?",
        respuesta: "Si el bulbo se rompe por impacto (no por temperatura), el extintor <strong>sí se activará</strong>. Por eso debe instalarse fuera del alcance de golpes y en alturas donde no haya tránsito de maquinaria o personal. En caso de activación accidental, contacte a Proyecto Red para recarga.",
      },
      {
        pregunta: "¿Diferencia entre el automático de 4.5 kg y el de 6 kg?",
        respuesta: "Ambos usan el mismo mecanismo de bulbo térmico a 68 °C. El de <strong>4.5 kg</strong> cubre un radio de 3–4 metros, ideal para cuartos eléctricos y áreas pequeñas. El de <strong>6 kg</strong> amplía la cobertura a 4–5 metros para bodegas y naves industriales de mayor superficie.",
      },
    ],
  },

  "polvo-seco/pqs-automatico-6-kg": {
    seo: {
      title: "Extintor PQS Automático 6 kg — Protección de Techo para Bodegas | Proyecto Red",
      description: "Extintor automático PQS 6 kg con bulbo térmico a 68 °C. Mayor cobertura para bodegas, naves industriales y subestaciones eléctricas. Cumple NOM-154-SCFI. Entrega CDMX.",
    },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Extintores", href: "/extintores/" },
      { label: "Polvo Seco PQS", href: "/extintores/polvo-seco/" },
      { label: "PQS Automático 6 kg" },
    ],
    heroStats: [
      { valor: "6 kg", label: "Capacidad" },
      { valor: "68 °C", label: "Activación" },
      { valor: "A·B·C", label: "Clases de fuego" },
    ],
    heroBadge: `Automático · Mayor Cobertura · NOM-154-SCFI`,
    heroTitle: `Extintor PQS Automático<br><span class="h1-accent">6 kg</span>`,
    heroSub: `Extintor automático de techo con la mayor capacidad de la línea. Bulbo térmico a 68 °C y radio de cobertura de 4 a 5 metros. Diseñado para bodegas de gran superficie, naves industriales, subestaciones eléctricas y áreas de almacenamiento donde se requiere protección continua sin supervisión.`,
    waHero: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20autom%C3%A1tico%206%20kg",
    btnSecundario: { href: "/extintores/polvo-seco/", label: "Ver Catálogo PQS" },
    heroRight: `<p>El extintor automático PQS de 6 kg ofrece la mayor capacidad de supresión en la línea de extintores de techo. Con un 33% más de agente extintor que la versión de 4.5 kg, cubre áreas más amplias y controla conatos de mayor intensidad.</p>
        <p>Cada unidad se entrega con soporte de techo reforzado, herrajes de montaje, manómetro verificado en zona verde y collar de garantía conforme a NOM-154-SCFI. Incluye ficha técnica y certificado de conformidad para expediente de Protección Civil.</p>`,
    mainIntro: `      <div class="pp-gallery">
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco.avif?strip=all&lossy=1" alt="Extintor PQS Automático 6 kg - Vista frontal etiqueta NOM-154-SCFI" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/galeria-1.avif?strip=all&lossy=1" alt="Extintor PQS Automático 6 kg - Detalle bulbo térmico 68°C" width="400" height="300" loading="eager" />
        </div>
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco/galeria-2.avif?strip=all&lossy=1" alt="Extintor PQS Automático 6 kg - Soporte reforzado de techo industrial" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/extintor-pqs-bodega-industrial-zona-cdmx.avif?strip=all&lossy=1" alt="Extintor PQS Automático 6 kg - Instalación en nave industrial CDMX" width="400" height="300" loading="eager" />
        </div>
      </div>

      <div class="pp-desc">
        <p>El extintor automático PQS de 6 kg es la opción de mayor capacidad para protección de techo. Con un <strong>33% más de agente extintor</strong> que el modelo de 4.5 kg, ofrece mayor tiempo de descarga y un radio de cobertura ampliado de 4 a 5 metros.</p>
        <p>Su mecanismo de activación — un <strong>bulbo térmico calibrado a 68 °C</strong> — garantiza respuesta automática sin electricidad ni intervención manual. El agente activo (<strong>fosfato monoamónico al 75%</strong>) suprime fuegos clase A, B y C.</p>
        <p><strong>Capacidad:</strong> 6 kg. <strong>Activación:</strong> 68 °C. <strong>Certificación:</strong> NOM-154-SCFI, NFPA 10, NFPA 17.</p>
      </div>
      
      `,
    specs: [
      { label: "Agente extintor", value: "Polvo químico seco ABC (fosfato monoamónico 75%)" },
      { label: "Capacidad nominal", value: "6 kg" },
      { label: "Clases de fuego", value: "A · B · C" },
      { label: "Mecanismo de activación", value: "Bulbo térmico de vidrio (68 °C / 155 °F)" },
      { label: "Presión de trabajo", value: "12–14 bar (175–195 psi)" },
      { label: "Gas propelente", value: "Nitrógeno seco (N₂)" },
      { label: "Tiempo de descarga", value: "~13 segundos" },
      { label: "Alcance de cobertura", value: "Radio de 4–5 metros (montaje a 3 m de altura)" },
      { label: "Temperatura de operación", value: "-20 °C a +60 °C" },
      { label: "Altura del cilindro", value: "~48 cm" },
      { label: "Peso total cargado", value: "~9.5 kg" },
      { label: "Material cilindro", value: "Acero al carbón, pintura electrostática roja" },
      { label: "Válvula", value: "Latón cromado con manómetro y bulbo térmico" },
      { label: "Montaje", value: "Soporte de techo reforzado con herrajes incluidos" },
      { label: "Altura de instalación", value: "2.5 a 4.5 metros recomendados" },
      { label: "Certificación", value: "NOM-154-SCFI · NFPA 10 · NFPA 17" },
      { label: "Incluye", value: "Soporte reforzado, herrajes, etiqueta, collar de garantía" },
      { label: "Vida útil cilindro", value: "20 años (prueba hidrostática c/5)" },
      { label: "Mantenimiento", value: "Anual obligatorio NOM-154-SCFI" },
    ],
    mainResto: `      <section class="pp-block">
        <h2>Características Destacadas</h2>
        <ul class="pp-features">
          <li><strong>Mayor capacidad de la línea automática</strong> — Con 6 kg de agente extintor (33% más que el modelo de 4.5 kg), ofrece mayor tiempo de descarga y cobertura ampliada para áreas de riesgo elevado.</li>
          <li><strong>Cobertura radial de 4–5 metros</strong> — Desde una altura de montaje de 3 metros, la descarga descendente protege un área circular de hasta 78 m², suficiente para la mayoría de cuartos técnicos y secciones de bodega.</li>
          <li><strong>Soporte de techo reforzado</strong> — Base de montaje de mayor calibre diseñada para soportar los 9.5 kg del equipo cargado. Incluye herrajes de acero y tornillería para fijación en losa, estructura metálica o plafón industrial.</li>
          <li><strong>Manómetro visible desde suelo</strong> — Verificación de presión operativa sin necesidad de subir al área de montaje. Aguja en zona verde = equipo listo.</li>
          <li><strong>Documentación para expediente</strong> — Incluye ficha técnica, certificado de conformidad NOM-154, collar de garantía y etiqueta de inspección. Listo para integrar al expediente de Protección Civil.</li>
        </ul>
      </section>
      
      <section class="pp-block">
        <h2>Aplicaciones</h2>
        <ul class="pp-app-list">
          <li>Bodegas y naves industriales de gran superficie</li>
          <li>Subestaciones eléctricas y cuartos de transformadores</li>
          <li>Plantas de manufactura con líneas de producción</li>
          <li>Áreas de almacenamiento de materiales combustibles</li>
          <li>Estacionamientos subterráneos de gran aforo</li>
          <li>Cocinas industriales de alto volumen y restaurantes</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>Instalación y Montaje</h2>
        <p>El extintor se instala en posición <strong>invertida (boquilla hacia abajo)</strong> suspendido del techo con soporte reforzado. La altura recomendada es de <strong>2.5 a 4.5 metros</strong>. Debido al mayor peso (9.5 kg), la estructura de montaje debe verificarse para soportar la carga estática y la vibración del disparo.</p>
      </section>

      <section class="pp-block">
        <h2>Cumplimiento Normativo</h2>
        <p>Cumple con <strong>NOM-154-SCFI</strong> para mantenimiento y recarga, <strong>NFPA 10</strong> para extintores portátiles y <strong>NFPA 17</strong> para sistemas de agente seco. La <strong>NOM-002-STPS</strong> establece los requisitos de prevención de incendios en centros de trabajo. Incluye documentación completa para expediente de Protección Civil.</p>
      </section>
      
      <section class="pp-block">
        <h2>Especificaciones Técnicas</h2>
        <div class="pp-specs-mini">
          <div class="pp-specs-mini__item"><span>Capacidad</span><span>6 kg</span></div>
          <div class="pp-specs-mini__item"><span>Activación</span><span>68 °C (bulbo térmico)</span></div>
          <div class="pp-specs-mini__item"><span>Certificación</span><span>NOM-154-SCFI, NFPA 10</span></div>
          <div class="pp-specs-mini__item"><span>Clases de fuego</span><span>A · B · C</span></div>
          <div class="pp-specs-mini__item"><span>Categoría</span><span>Extintores Automáticos PQS</span></div>
        </div>
      </section>

    `,
    nav: {
      titulo: "Extintores PQS",
      ariaLabel: "Categorías de extintores PQS",
      items: [
        { label: "Portátiles (1–3 kg)", href: "/extintores/polvo-seco/" },
        { label: "Estándar (4.5–12 kg)", href: "/extintores/polvo-seco/" },
        { label: "Automáticos (techo)", href: "/extintores/polvo-seco/", active: true },
        { label: "Con gabinete", href: "/extintores/polvo-seco/" },
        { label: "Rodantes (25–50 kg)", href: "/extintores/polvo-seco/" },
      ],
      backHref: "/extintores/polvo-seco/",
      backLabel: "← Ver todo el catálogo PQS",
    },
    waSidebar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20autom%C3%A1tico%206%20kg",
    caracteristicas: [
      "Activación automática a 68 °C sin intervención humana",
      "Soporte de techo reforzado y herrajes incluidos",
      "Manómetro verificado en zona verde",
      "Collar de garantía NOM-154-SCFI",
    ],
    sidebarCerts: { titulo: "Certificaciones Disponibles", html: `<div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-154-SCFI</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-002-STPS</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NFPA</span><span class="sb__cert-name">NFPA 10</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NFPA</span><span class="sb__cert-name">NFPA 17</span></div>` },
    sidebarBrands: { titulo: "Marcas que Manejamos", items: ["Proyecto Red — Marca propia", "Extintores certificados NOM"], note: "Pregunta por otras marcas" },
    aplicaciones: [
      "Bodegas y naves industriales de gran superficie",
      "Subestaciones eléctricas y cuartos de transformadores",
      "Plantas de manufactura con líneas de producción",
      "Áreas de almacenamiento de materiales combustibles",
      "Estacionamientos subterráneos de gran aforo",
      "Cocinas industriales de alto volumen",
    ],
    productos: {
      titulo: "Productos Relacionados",
      relacionados: [
        { nombre: "PQS Automático 4.5 kg", href: "/extintores/polvo-seco/pqs-automatico-4-5-kg/" },
        { nombre: "PQS 6 kg Portátil", href: "/extintores/polvo-seco/" },
        { nombre: "PQS 9 kg Almacenes", href: "/extintores/polvo-seco/" },
        { nombre: "PQS 6 kg Gabinete", href: "/extintores/polvo-seco/" },
      ],
      extraHtml: `<li><a href="/extintores/co2/">Extintores CO₂</a></li>
          <li><a href="/extintores/tipo-k/">Extintores Tipo K</a></li>`,
    },
    servicios: { desc: "Complementa tu compra con mantenimiento y capacitación profesional.", linkLabel: "¿Necesitas más servicios? Ver todos →" },
    otros: {
      titulo: "Otros Extintores PQS Disponibles",
      sub: "Explora más opciones según tu aplicación específica",
      linkHref: "/extintores/polvo-seco/",
      linkLabel: "Ver todo el catálogo PQS →",
      items: [
        { nombre: "PQS Automático 4.5 kg", desc: "Versión compacta para cuartos eléctricos y áreas pequeñas. Mismo mecanismo de bulbo térmico.", specs: ["4.5 kg", "68 °C", "3–4 m"], href: "/extintores/polvo-seco/pqs-automatico-4-5-kg/", img: "/imagenes/extintores/polvo-seco.avif" },
        { nombre: "PQS 6 kg — Talleres", desc: "Versión portátil manual del mismo agente y capacidad. Para áreas con personal presente.", specs: ["6 kg", "~13 s", "4–5 m"], href: "/extintores/polvo-seco/", img: "/imagenes/extintores/polvo-seco.avif" },
        { nombre: "PQS 6 kg Gabinete", desc: "Extintor de 6 kg con gabinete metálico para montaje en pared y acceso rápido.", specs: ["6 kg", "Gabinete", "NOM-154"], href: "/extintores/polvo-seco/", img: "/imagenes/extintores/polvo-seco.avif" },
        { nombre: "PQS 12 kg — Industrial", desc: "Para zonas de alto riesgo donde se necesita la máxima capacidad portátil.", specs: ["12 kg", "~20 s", "5–6 m"], href: "/extintores/polvo-seco/", img: "/imagenes/extintores/polvo-seco.avif" },
      ],
      ctaCorto: true,
    },
    cotizarTitulo: "Cotiza Extintor PQS Automático 6 kg",
    cotizarPerks: ["Asesoría técnica sin costo", "Entrega el mismo día en CDMX", "Factura electrónica disponible"],
    waCotizar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20PQS%20autom%C3%A1tico%206%20kg.%20Mi%20nombre%20es%3A",
    faqSubtitulo: "Todo sobre el extintor automático PQS 6 kg",
    pageId: "pqs-automatico-6-kg",
    faqs: [
      {
        pregunta: "¿Cuál es la ventaja del automático de 6 kg sobre el de 4.5 kg?",
        respuesta: "El modelo de 6 kg ofrece <strong>33% más agente extintor</strong>, lo que se traduce en mayor tiempo de descarga (~13 s vs ~10 s) y un radio de cobertura ampliado de <strong>4–5 metros</strong> frente a los 3–4 metros del modelo de 4.5 kg. Es la opción recomendada para bodegas y naves industriales de mayor superficie.",
      },
      {
        pregunta: "¿Cómo funciona la activación automática?",
        respuesta: "El bulbo térmico de vidrio contiene un líquido que se expande con el calor. Al alcanzar <strong>68 °C</strong>, el bulbo se rompe y libera la válvula, permitiendo que la presión del nitrógeno expulse el polvo químico seco. No requiere electricidad, baterías ni intervención humana.",
      },
      {
        pregunta: "¿Se puede instalar en naves con techos muy altos?",
        respuesta: "La altura máxima recomendada es de <strong>4.5 metros</strong>. En naves con techos más altos, se recomienda instalar el extintor en una estructura secundaria a la altura correcta, o complementar con un sistema de rociadores automáticos para cobertura completa.",
      },
      {
        pregunta: "¿Qué mantenimiento requiere?",
        respuesta: "La <strong>NOM-154-SCFI</strong> exige mantenimiento anual que incluye: inspección del bulbo térmico, verificación de presión, revisión de herrajes de montaje y estado del soporte de techo. Cada <strong>5 años</strong> se requiere prueba hidrostática del cilindro.",
      },
      {
        pregunta: "¿Se activa con el calor normal del techo?",
        respuesta: "No. El bulbo está calibrado a <strong>68 °C</strong>, una temperatura que solo se alcanza durante un incendio real. La temperatura normal en el techo de una bodega o nave industrial rara vez supera los 45 °C. El margen de seguridad es amplio.",
      },
      {
        pregunta: "¿Proyecto Red instala los extintores automáticos?",
        respuesta: "Sí. Ofrecemos <strong>servicio de instalación profesional</strong> que incluye evaluación del área, definición de puntos de montaje, instalación con herrajes y verificación de cobertura. También capacitamos al personal sobre inspección visual periódica del equipo.",
      },
    ],
  },

  "co2/co2-2-5-kg": {
    seo: { title: "Extintor CO₂ 2.5 kg — Dióxido de Carbono Compacto para Electrónica | Proyecto Red", description: "Extintor de CO₂ 2.5 kg compacto para equipos electrónicos: PCs, impresoras y telecomunicaciones. No deja residuo. Clase B y C. NOM-154-SCFI. Entrega en CDMX." },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Extintores", href: "/extintores/" },
      { label: "CO₂", href: "/extintores/co2/" },
      { label: "CO₂ 2.5 kg" },
    ],
    heroBadge: `Clase B·C · Sin residuo · NOM-154-SCFI`,
    heroTitle: `Extintor CO₂<br><span class="h1-accent">2.5 kg — Compacto</span>`,
    heroSub: `El extintor de CO₂ de 2.5 kg es la opción compacta para proteger equipos electrónicos de valor medio sin dejar residuo: computadoras de escritorio, impresoras y equipos de telecomunicaciones en oficinas.`,
    waHero: "Hola%2C%20necesito%20cotizar%20el%20extintor%20CO%E2%82%82%202.5%20kg",
    btnSecundario: { href: "/extintores/co2/", label: "Ver Catálogo" },
    heroRight: `<p>El CO₂ apaga el fuego <strong>desplazando el oxígeno y enfriando</strong> el combustible, sin dejar polvo, humedad ni residuo químico. Por eso es el agente preferido para equipos electrónicos sensibles donde el polvo ABC causaría daño.</p><p>La capacidad de 2.5 kg es ligera y fácil de mover entre ubicaciones. Combate fuegos de <strong>líquidos inflamables (Clase B)</strong> y <strong>equipos eléctricos energizados (Clase C)</strong> con boquilla corneta para descarga controlada.</p>`,
    mainIntro: `      <div class="pp-gallery">
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/co2/co2-2-5kg-extintor-electrico-compacto.avif?strip=all&lossy=1" alt="Extintor CO₂ 2.5 kg — Vista frontal" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/co2/galeria-2.avif?strip=all&lossy=1" alt="Extintor CO₂ 2.5 kg — Detalle válvula" width="400" height="300" loading="eager" />
        </div>
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/co2/galeria-3.avif?strip=all&lossy=1" alt="Extintor CO₂ 2.5 kg — Aplicación profesional" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/co2/co2-2-5kg-extintor-electrico-compacto.avif?strip=all&lossy=1" alt="Extintor CO₂ 2.5 kg — Instalación CDMX" width="400" height="300" loading="lazy" />
        </div>
      </div>
      <div class="pp-desc">
        <p>El extintor de CO₂ de 2.5 kg es la solución compacta para proteger equipos electrónicos de valor medio. Al descargarse, el dióxido de carbono no deja residuo alguno, evitando el daño secundario que el polvo químico causaría sobre tarjetas, contactos y componentes.</p><p>Su tamaño ligero facilita el montaje y el transporte entre puestos de trabajo. Es ideal para oficinas, áreas de cajas y pequeños cuartos de equipo donde el riesgo principal es eléctrico o de electrónicos sensibles.</p>
        <p><strong>Capacidad:</strong> 2.5 kg. <strong>Clases:</strong> B · C. <strong>Agente:</strong> Dióxido de carbono (CO₂). <strong>Certificación:</strong> NOM-154-SCFI, NFPA 10.</p>
      </div>
      `,
    specs: [
      { label: "Agente extintor", value: "Dióxido de carbono (CO₂)" },
      { label: "Clases de fuego", value: "B · C" },
      { label: "Capacidad nominal", value: "2.5 kg" },
      { label: "Tiempo de descarga", value: "~5 segundos" },
      { label: "Alcance / descarga", value: "1.5–2 m" },
      { label: "Presión de trabajo", value: "~58 bar (≈850 PSI)" },
      { label: "Altura aprox.", value: "~48 cm" },
      { label: "Diámetro aprox.", value: "~11 cm" },
      { label: "Peso total cargado", value: "~7 kg" },
      { label: "Material", value: "Acero, pintura electrostática roja" },
      { label: "Certificación", value: "NOM-154-SCFI · NFPA 10" },
      { label: "Incluye", value: "Soporte/carretilla según modelo, etiqueta, collar de garantía" },
      { label: "Mantenimiento", value: "Anual obligatorio (NOM-154-SCFI) · Prueba hidrostática c/5 años" }
    ],
    mainResto: `      <section class="pp-block"><h2>Aplicaciones</h2><ul class="pp-app-list">
          <li>Oficinas con equipo de cómputo</li>
          <li>Impresoras y equipos de telecomunicaciones</li>
          <li>Pequeños cuartos de UPS</li>
          <li>Mostradores y áreas de cajas</li>
          <li>Laboratorios con instrumentación menor</li>
          <li>Vehículos con equipo electrónico</li>
      </ul></section>
      <section class="pp-block"><h2>Comparativa rápida</h2>
        <table class="pp-table" style="margin-top:0.5rem;"><tbody>
          <tr><td class="pp-table__label">Residuo</td><td class="pp-table__value">CO₂: cero residuo · ABC: residuo corrosivo</td></tr>
          <tr><td class="pp-table__label">Equipos electrónicos</td><td class="pp-table__value">CO₂: seguro y limpio · ABC: puede dañar</td></tr>
          <tr><td class="pp-table__label">Clase A (sólidos)</td><td class="pp-table__value">CO₂: limitado · ABC: sí</td></tr>
          <tr><td class="pp-table__label">Mejor uso</td><td class="pp-table__value">CO₂: electrónica, tableros, UPS</td></tr>
        </tbody></table>
      </section>
      <section class="pp-block"><h2>Cumplimiento Normativo</h2>
        <p>Este extintor cumple con la <strong>NOM-154-SCFI</strong> para mantenimiento y recarga y <strong>NFPA 10</strong> como referencia internacional. La <strong>NOM-002-STPS</strong> establece los requerimientos de protección contra incendios en centros de trabajo. Cada unidad se entrega con documentación para tu expediente de Protección Civil.</p>
      </section>
    `,
    waSidebar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20CO%E2%82%82%202.5%20kg",
    caracteristicas: [
      "CO₂ gaseoso · 2.5 kg · ~5 s descarga · 1.5–2 m alcance · Boquilla corneta metálica",
      "Certificado NOM-154-SCFI con collar de garantía",
      "Recargable — servicio de recarga en CDMX",
      "Entrega el mismo día en zona metropolitana",
      "Documentación para Protección Civil incluida"
    ],
    aplicaciones: [
      "Oficinas con equipo de cómputo",
      "Impresoras y equipos de telecomunicaciones",
      "Pequeños cuartos de UPS",
      "Mostradores y áreas de cajas",
      "Laboratorios con instrumentación menor",
      "Vehículos con equipo electrónico"
    ],
    productos: {
      titulo: "Otros Extintores",
      extraHtml: `<li><a href="/extintores/co2/">Ver todo Extintores CO₂</a></li>
          <li><a href="/extintores/polvo-seco/">Polvo Seco PQS</a></li>
          <li><a href="/extintores/co2/">CO₂</a></li>
          <li><a href="/extintores/tipo-k/">Tipo K — Cocinas</a></li>
          <li><a href="/extintores/afff/">AFFF — Espuma</a></li>`,
    },
    servicios: { linkLabel: "Ver todos los servicios →" },
    cotizarTitulo: "Cotiza CO₂ 2.5 kg",
    cotizarPerks: ["Asesoría técnica sin costo", "Entrega el mismo día en CDMX", "Factura electrónica disponible"],
    waCotizar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20CO%E2%82%82%202.5%20kg",
    faqSubtitulo: "Todo sobre el extintor CO₂ 2.5 kg",
    pageId: "co2-2-5-kg",
    faqs: [
      {
        pregunta: "¿Qué clases de fuego apaga el CO₂ 2.5 kg?",
        respuesta: "Está certificado para fuegos <strong>B · C</strong>. El CO₂ apaga el fuego <strong>desplazando el oxígeno y enfriando</strong> el combustible, sin dejar polvo, humedad ni residuo químico. Por eso es el agente preferido para equipos electrónicos sensibles donde el polvo ABC causaría daño.",
      },
      {
        pregunta: "¿Por qué CO₂ y no polvo ABC para electrónica?",
        respuesta: "El polvo ABC deja un <strong>residuo corrosivo</strong> que daña tarjetas, contactos y componentes electrónicos. El CO₂ no deja residuo: se evapora sin rastro, por lo que es el agente correcto para PCs, servidores e instrumentación sensible.",
      },
      {
        pregunta: "¿El CO₂ sirve para fuegos de papel o madera (Clase A)?",
        respuesta: "De forma limitada. El CO₂ está optimizado para <strong>Clase B y C</strong>. Para áreas con mucho material sólido (papel, cartón, madera) conviene complementar con un extintor ABC o de agua.",
      },
      {
        pregunta: "¿Cada cuánto requiere mantenimiento?",
        respuesta: "Conforme a <strong>NOM-154-SCFI</strong>, requiere mantenimiento anual y prueba hidrostática del cilindro cada 5 años. Ofrecemos pólizas de mantenimiento preventivo en CDMX y Estado de México.",
      },
      {
        pregunta: "¿Puedo recargarlo en CDMX?",
        respuesta: "Sí. Ofrecemos servicio de recarga con verificación, revisión y collar de garantía NOM-154-SCFI. Llámanos al <strong>56 2759 6245</strong> o escríbenos por WhatsApp.",
      }
    ],
  },

  "co2/co2-5-kg": {
    seo: {
      title: "Extintor CO₂ 5 kg — Para Servidores y Equipos Eléctricos | Proyecto Red",
      description: "Extintor de CO₂ 5 kg. Descarga limpia sin residuo para cuartos de servidores, UPS, tableros y laboratorios. Certif. NOM-154-SCFI. Entrega el mismo día CDMX.",
    },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Extintores", href: "/extintores/" },
      { label: "CO₂ — Dióxido de Carbono", href: "/extintores/co2/" },
      { label: "CO₂ 5 kg" },
    ],
    heroStats: [
      { valor: "5 kg",    label: "Capacidad" },
      { valor: "B · C",  label: "Clases de fuego" },
      { valor: "0 residuo", label: "Descarga limpia" },
    ],
    heroBadge: `Sin Residuo · Clase B y C · NOM-154-SCFI`,
    heroTitle: `Extintor CO₂<br><span class="h1-accent">5 kg</span>`,
    heroSub: `Extintor de dióxido de carbono de 5 kg. Descarga completamente limpia sin polvo, humedad ni residuo químico — la opción indicada para cuartos de servidores, tableros eléctricos, laboratorios y cualquier espacio donde el equipo activo no puede tolerar contaminación.`,
    waHero: "Hola%2C%20necesito%20cotizar%20el%20extintor%20CO%E2%82%82%205%20kg",
    btnSecundario: { href: "/extintores/co2/", label: "Ver Catálogo CO₂" },
    heroRight: `<p>El extintor de CO₂ de 5 kg es el más solicitado para protección de equipos eléctricos y electrónicos de valor. Con 5 kg de dióxido de carbono, cubre eficientemente espacios de hasta 20 m² con descarga de ~7 segundos y alcance de hasta 2.5 metros.</p>
        <p>A diferencia del polvo seco, el CO₂ no deja rastro sobre los equipos protegidos — no requiere limpieza post-incendio del agente, lo que minimiza el tiempo de interrupción operativa. Cada unidad se entrega con collar de garantía NOM-154-SCFI, etiqueta de inspección y documentación para expediente de Protección Civil.</p>`,
    mainIntro: `      <div class="pp-gallery">
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/co2.avif?strip=all&lossy=1" alt="Extintor CO₂ 5 kg - Vista frontal con corneta metálica NOM-154-SCFI" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/co2/galeria-1.avif?strip=all&lossy=1" alt="Extintor CO₂ 5 kg - Detalle boquilla corneta dieléctrica" width="400" height="300" loading="eager" />
        </div>
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/co2/galeria-2.avif?strip=all&lossy=1" alt="Extintor CO₂ 5 kg - Instalación en cuarto de servidores CDMX" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/co2/galeria-3.avif?strip=all&lossy=1" alt="Extintor CO₂ 5 kg - Certificación NOM-154-SCFI y collar de garantía" width="400" height="300" loading="eager" />
        </div>
      </div>

      <div class="pp-desc">
        <p>El extintor de CO₂ 5 kg actúa por <strong>desplazamiento de oxígeno y enfriamiento súbito</strong> en la zona del fuego. Al descargarse, el dióxido de carbono gaseoso a -79 °C sofoca la llama sin dejar polvo, humedad ni residuo químico de ningún tipo.</p>
        <p>Su boquilla tipo <strong>corneta metálica difusora</strong> permite dirigir el cono de descarga con precisión a la base del fuego. Actúa de forma segura sobre corrientes eléctricas activas (clase C) y sobre líquidos inflamables (clase B).</p>
        <p><strong>Capacidad:</strong> 5 kg. <strong>Clases:</strong> B y C. <strong>Certificación:</strong> NOM-154-SCFI, NFPA 10, NFPA 2001.</p>
      </div>

      `,
    specs: [
      { label: "Agente extintor",       value: "CO₂ — dióxido de carbono puro" },
      { label: "Capacidad nominal",     value: "5 kg" },
      { label: "Clases de fuego",       value: "B · C (no clase A en profundidad)" },
      { label: "Presión interna",       value: "850–900 PSI (58–62 bar)" },
      { label: "Propelente",            value: "CO₂ líquido autoexpandiente (sin gas adicional)" },
      { label: "Tiempo de descarga",    value: "~7 segundos" },
      { label: "Alcance de descarga",   value: "1.5–2.5 metros" },
      { label: "Temperatura operación", value: "-20 °C a +55 °C" },
      { label: "Boquilla",              value: "Corneta metálica difusora" },
      { label: "Verificación de carga", value: "Pesaje obligatorio (sin manómetro)" },
      { label: "Altura del cilindro",   value: "~55 cm" },
      { label: "Peso total cargado",    value: "~10 kg" },
      { label: "Material cilindro",     value: "Acero de alta resistencia (sin soldadura)" },
      { label: "Montaje",               value: "Soporte de pared o carretilla" },
      { label: "Certificación",         value: "NOM-154-SCFI · NFPA 10 · NFPA 2001" },
      { label: "Incluye",               value: "Corneta, soporte de pared, etiqueta, collar de garantía" },
      { label: "Vida útil cilindro",    value: "25 años (prueba hidrostática c/5)" },
      { label: "Mantenimiento",         value: "Anual obligatorio NOM-154-SCFI (con pesaje)" },
    ],
    mainResto: `      <section class="pp-block">
        <h2>Características Destacadas</h2>
        <ul class="pp-features">
          <li><strong>Descarga 100% limpia — cero daño secundario</strong> — El CO₂ se evapora completamente sin dejar rastro sobre PCBs, discos duros, pantallas ni instrumentación de laboratorio. No requiere limpieza post-descarga del agente.</li>
          <li><strong>Corneta metálica difusora</strong> — La boquilla en forma de corneta produce un cono de descarga amplio y controlado. Permite apuntar con precisión a la base de la llama desde una distancia segura. Temperatura de salida: -79 °C — no sostener directamente.</li>
          <li><strong>Sin manómetro — verificación por pesaje</strong> — El CO₂ se almacena en estado líquido a presión constante. El mantenimiento anual obligatorio incluye pesaje del cilindro para verificar que la carga no ha disminuido. Cada visita genera reporte con peso registrado.</li>
          <li><strong>Seguro en equipos eléctricos activos</strong> — Avalado por UL 711 y NFPA 10 para uso en corrientes eléctricas hasta 1,000 V a distancia normal de operación (≥ 1 m). Sin riesgo de conducción eléctrica durante la descarga.</li>
          <li><strong>Documentación completa para expediente</strong> — Entregamos ficha técnica, certificado de conformidad NOM-154-SCFI, collar de garantía y etiqueta de inspección. Todo lo necesario para tu expediente de Protección Civil y STPS.</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>Aplicaciones</h2>
        <ul class="pp-app-list">
          <li>Cuartos de servidores y centros de datos</li>
          <li>Tableros de distribución eléctrica y equipos UPS</li>
          <li>Laboratorios con instrumentación de precisión y análisis</li>
          <li>Archivos, acervos documentales y notarías</li>
          <li>Cuartos de generadores y subestaciones de baja tensión</li>
          <li>Bares, estudios de grabación y zonas con electrónica de valor</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>Instalación y Ubicación</h2>
        <p>El extintor de CO₂ 5 kg se instala en soporte de pared a una altura de <strong>manija entre 1.0 y 1.5 metros</strong> desde el piso, conforme a NOM-002-STPS. La ubicación recomendada es <strong>a la salida del área protegida</strong>, nunca al fondo — el operador debe poder alcanzarlo antes de estar frente al fuego.</p>
        <p>En cuartos de servidores: colocar en la puerta de acceso, visible y despejado. En zonas de tableros: uno en cada extremo del pasillo. No instalar en espacios donde la temperatura supere los 55 °C de manera habitual.</p>
      </section>

      <section class="pp-block">
        <h2>Cumplimiento Normativo</h2>
        <p>Cumple con <strong>NOM-154-SCFI</strong> para mantenimiento y recarga anual de extintores portátiles. La <strong>NFPA 10</strong> regula la selección, instalación y mantenimiento de extintores portátiles. La <strong>NFPA 2001</strong> aplica para sistemas de agente limpio (CO₂, FM-200, Novec) en instalaciones fijas. La <strong>NOM-002-STPS</strong> establece la prevención, protección y combate de incendios en centros de trabajo. El extintor se entrega con toda la documentación para cumplimiento de Protección Civil y STPS.</p>
      </section>

      <section class="pp-block">
        <h2>Resumen de Especificaciones</h2>
        <div class="pp-specs-mini">
          <div class="pp-specs-mini__item"><span>Capacidad</span><span>5 kg</span></div>
          <div class="pp-specs-mini__item"><span>Clases de fuego</span><span>B · C</span></div>
          <div class="pp-specs-mini__item"><span>Certificación</span><span>NOM-154-SCFI, NFPA 10</span></div>
          <div class="pp-specs-mini__item"><span>Descarga</span><span>~7 segundos</span></div>
          <div class="pp-specs-mini__item"><span>Categoría</span><span>Extintores CO₂</span></div>
          <div class="pp-specs-mini__item"><span>Alcance</span><span>1.5–2.5 metros</span></div>
        </div>
      </section>

    `,
    nav: {
      titulo: "Extintores CO₂",
      ariaLabel: "Capacidades de extintores CO₂",
      items: [
        { label: "CO₂ 2.5 kg — Compacto",  href: "/extintores/co2/" },
        { label: "CO₂ 5 kg — Más vendido", href: "/extintores/co2/co2-5-kg/", active: true },
        { label: "CO₂ 10 kg — Industrial", href: "/extintores/co2/" },
      ],
      backHref: "/extintores/co2/",
      backLabel: "← Ver todo el catálogo CO₂",
    },
    waSidebar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20CO%E2%82%82%205%20kg",
    caracteristicas: [
      "Descarga 100% limpia — sin polvo, sin humedad, sin residuo corrosivo",
      "No deja residuo sobre equipos electrónicos activos",
      "Seguro en corrientes eléctricas activas hasta 1,000 V (35 kV en prueba)",
      "Collar de garantía NOM-154-SCFI con fecha de próximo servicio",
    ],
    sidebarCerts: { titulo: "Certificaciones Disponibles", html: `<div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-154-SCFI</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-002-STPS</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NFPA</span><span class="sb__cert-name">NFPA 10</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NFPA</span><span class="sb__cert-name">NFPA 2001</span></div>` },
    sidebarBrands: { titulo: "Marcas que Manejamos", items: ["Proyecto Red — Marca propia", "Extintores certificados NOM"], note: "Pregunta por otras marcas" },
    aplicaciones: [
      "Cuartos de servidores y centros de datos",
      "Tableros de distribución eléctrica y equipos UPS",
      "Laboratorios con instrumentación de precisión",
      "Archivos, acervos documentales y notarías",
      "Cuartos de generadores y subestaciones de baja tensión",
      "Bares, estudios y zonas con electrónica de valor",
    ],
    productos: {
      titulo: "Productos Relacionados",
      relacionados: [
        { nombre: "CO₂ 2.5 kg — Compacto",    href: "/extintores/co2/" },
        { nombre: "CO₂ 10 kg — Industrial",   href: "/extintores/co2/" },
        { nombre: "Agente Limpio 2.3 kg",      href: "/extintores/agente-limpio/" },
        { nombre: "PQS 4.5 kg — Portátil",    href: "/extintores/polvo-seco/" },
      ],
      extraHtml: `<li><a href="/extintores/polvo-seco/">Extintores PQS Polvo Seco</a></li>
          <li><a href="/extintores/tipo-k/">Extintores Tipo K</a></li>`,
    },
    servicios: { desc: "Complementa tu compra con mantenimiento y capacitación profesional.", linkLabel: "¿Necesitas más servicios? Ver todos →" },
    otros: {
      titulo: "Otros Extintores en Nuestra Línea",
      sub: "Explora más opciones según tu aplicación específica",
      linkHref: "/extintores/co2/",
      linkLabel: "Ver todo el catálogo CO₂ →",
      items: [
        {
          nombre: "CO₂ 2.5 kg — Compacto",
          desc: "Para espacios pequeños con PCs, impresoras y equipos de telecomunicaciones. Fácil de reubicar.",
          specs: ["2.5 kg", "~5 s", "1.5–2 m"],
          href: "/extintores/co2/",
          img: "https://ewvydcs5uyw.exactdn.com/imagenes/extintores/co2.avif?strip=all&lossy=1",
        },
        {
          nombre: "CO₂ 10 kg — Industrial",
          desc: "Para cuartos eléctricos, subestaciones y generadores. Requiere carretilla por su peso.",
          specs: ["10 kg", "~12 s", "2.5–3 m"],
          href: "/extintores/co2/",
          img: "https://ewvydcs5uyw.exactdn.com/imagenes/extintores/co2.avif?strip=all&lossy=1",
        },
        {
          nombre: "Agente Limpio 2.3 kg",
          desc: "FE-36 sin residuo para centros de datos críticos donde el CO₂ representa riesgo para el personal.",
          specs: ["2.3 kg", "Sin O₂", "FM-200"],
          href: "/extintores/agente-limpio/",
          img: "https://ewvydcs5uyw.exactdn.com/imagenes/extintores/agente-limpio.avif?strip=all&lossy=1",
        },
        {
          nombre: "PQS 4.5 kg — Portátil",
          desc: "Complementa el CO₂ en áreas con materiales sólidos (clase A). El más solicitado para oficinas.",
          specs: ["4.5 kg", "A·B·C", "NOM-154"],
          href: "/extintores/polvo-seco/",
          img: "https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco.avif?strip=all&lossy=1",
        },
      ],
      ctaCorto: true,
    },
    cotizarTitulo: "Cotiza Extintor CO₂ 5 kg",
    cotizarPerks: ["Asesoría técnica sin costo", "Entrega el mismo día en CDMX", "Factura electrónica disponible"],
    waCotizar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20CO%E2%82%82%205%20kg.%20Mi%20nombre%20es%3A",
    faqSubtitulo: "Todo sobre el extintor de CO₂ 5 kg",
    pageId: "co2-5-kg",
    faqs: [
      {
        pregunta: "¿Por qué el extintor de CO₂ no tiene manómetro?",
        respuesta: "El CO₂ se almacena en estado <strong>líquido a alta presión</strong>. La presión del gas sobre el líquido es constante hasta que el agente se agota, por lo que un manómetro mostraría la misma lectura aun cuando el cilindro estuviera casi vacío. La única forma de verificar que está lleno es <strong>pesarlo</strong> y compararlo con el peso grabado en el cilindro. Por eso el mantenimiento anual con pesaje es obligatorio conforme a NOM-154-SCFI.",
      },
      {
        pregunta: "¿El CO₂ es peligroso para las personas?",
        respuesta: "En espacios confinados sin ventilación, una descarga completa puede desplazar el oxígeno lo suficiente para generar dificultad respiratoria. Los extintores portátiles de 5 kg no alcanzan esa concentración en espacios normales, pero en cuartos sellados de menos de 10 m³ se debe desalojar antes de usarlo. Para instalaciones grandes con riesgo de personal, se prefieren <strong>agentes limpios</strong> como FM-200 o Novec con concentraciones de diseño menores.",
      },
      {
        pregunta: "¿El CO₂ puede usarse en equipos eléctricos vivos?",
        respuesta: "Sí. El CO₂ es un gas dieléctrico — no conduce electricidad. Es seguro para descarga sobre equipos energizados hasta <strong>1,000 V</strong> a la distancia de uso normal (más de 1 metro). Las normas UL 711 y NFPA 10 avalan su uso en fuegos clase C. No tocar la corneta metálica durante la descarga ya que puede alcanzar -79 °C.",
      },
      {
        pregunta: "¿El CO₂ apaga fuegos en madera o papel?",
        respuesta: "Es efectivo en fuegos superficiales de materiales sólidos (clase A), pero <strong>no penetra en la masa</strong> del material para apagar brasas internas. Si hay posibilidad de re-ignición en papel o madera, se debe complementar con polvo seco ABC. En cuartos de servidores el riesgo real casi siempre es eléctrico (clase C), donde el CO₂ es el agente óptimo.",
      },
      {
        pregunta: "¿Cuántos extintores de CO₂ necesito en mi cuarto de servidores?",
        respuesta: "La regla general es <strong>1 extintor de 5 kg por cada 10–15 m²</strong> de cuarto de servidores. Para cuartos mayores de 30 m² se recomienda un sistema de supresión fija (FM-200, Novec o CO₂ total flooding). Los extintores portátiles son el complemento de primera respuesta — no reemplazan a un sistema automático en instalaciones críticas. Te hacemos la evaluación sin costo.",
      },
      {
        pregunta: "¿Proyecto Red realiza el mantenimiento y recarga del CO₂?",
        respuesta: "Sí. Recargamos y mantenemos extintores de CO₂ de cualquier marca. El servicio incluye <strong>pesaje del cilindro</strong>, revisión de la válvula y sello, inspección de la corneta y manguera, y prueba hidrostática cada 5 años. Emitimos reporte firmado válido para auditorías de STPS y Protección Civil.",
      },
    ],
  },

  "co2/co2-10-kg": {
    seo: { title: "Extintor CO₂ 10 kg — Dióxido de Carbono Industrial para Cuartos Eléctricos | Proyecto Red", description: "Extintor de CO₂ 10 kg de alta capacidad para cuartos eléctricos, subestaciones y generadores. No deja residuo. Clase B y C. NOM-154-SCFI. CDMX y Estado de México." },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Extintores", href: "/extintores/" },
      { label: "CO₂", href: "/extintores/co2/" },
      { label: "CO₂ 10 kg" },
    ],
    heroBadge: `Clase B·C · Industrial · NOM-154-SCFI`,
    heroTitle: `Extintor CO₂<br><span class="h1-accent">10 kg — Industrial</span>`,
    heroSub: `El extintor de CO₂ de 10 kg es la capacidad industrial para cuartos eléctricos, subestaciones, generadores y plantas de mayor envergadura. Mayor carga de agente para áreas con equipo eléctrico crítico de gran tamaño.`,
    waHero: "Hola%2C%20necesito%20cotizar%20el%20extintor%20CO%E2%82%82%2010%20kg",
    btnSecundario: { href: "/extintores/co2/", label: "Ver Catálogo" },
    heroRight: `<p>El CO₂ de 10 kg entrega la <strong>mayor capacidad portátil</strong> de la línea de dióxido de carbono. Apaga sin residuo, protegiendo equipo eléctrico de gran valor sin daño secundario por polvo o humedad.</p><p>Por su peso, normalmente se monta en <strong>carretilla o soporte reforzado</strong>. Es el extintor de elección para subestaciones, cuartos de generadores y centros de carga industriales donde un conato eléctrico debe controlarse de inmediato.</p>`,
    mainIntro: `      <div class="pp-gallery">
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/co2/co2-10kg-extintor-industrial-alta-capacidad.avif?strip=all&lossy=1" alt="Extintor CO₂ 10 kg — Vista frontal" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/co2/galeria-2.avif?strip=all&lossy=1" alt="Extintor CO₂ 10 kg — Detalle válvula" width="400" height="300" loading="eager" />
        </div>
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/co2/galeria-3.avif?strip=all&lossy=1" alt="Extintor CO₂ 10 kg — Aplicación profesional" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/co2/co2-10kg-extintor-industrial-alta-capacidad.avif?strip=all&lossy=1" alt="Extintor CO₂ 10 kg — Instalación CDMX" width="400" height="300" loading="lazy" />
        </div>
      </div>
      <div class="pp-desc">
        <p>El extintor de CO₂ de 10 kg es la mayor capacidad portátil de la línea de dióxido de carbono. Está diseñado para áreas industriales con equipo eléctrico crítico de gran tamaño, donde se requiere más agente para controlar un conato sin dañar la instalación.</p><p>Por su peso cargado (~28 kg) se entrega con carretilla o soporte reforzado para acceso inmediato. Es el equipo indicado para subestaciones, cuartos de generadores y centros de carga donde el riesgo eléctrico es alto.</p>
        <p><strong>Capacidad:</strong> 10 kg. <strong>Clases:</strong> B · C. <strong>Agente:</strong> Dióxido de carbono (CO₂). <strong>Certificación:</strong> NOM-154-SCFI, NFPA 10.</p>
      </div>
      `,
    specs: [
      { label: "Agente extintor", value: "Dióxido de carbono (CO₂)" },
      { label: "Clases de fuego", value: "B · C" },
      { label: "Capacidad nominal", value: "10 kg" },
      { label: "Tiempo de descarga", value: "~12 segundos" },
      { label: "Alcance / descarga", value: "2.5–3 m" },
      { label: "Presión de trabajo", value: "~58 bar (≈850 PSI)" },
      { label: "Altura aprox.", value: "~95 cm" },
      { label: "Diámetro aprox.", value: "~17 cm" },
      { label: "Peso total cargado", value: "~28 kg" },
      { label: "Material", value: "Acero, pintura electrostática roja" },
      { label: "Certificación", value: "NOM-154-SCFI · NFPA 10" },
      { label: "Incluye", value: "Soporte/carretilla según modelo, etiqueta, collar de garantía" },
      { label: "Mantenimiento", value: "Anual obligatorio (NOM-154-SCFI) · Prueba hidrostática c/5 años" }
    ],
    mainResto: `      <section class="pp-block"><h2>Aplicaciones</h2><ul class="pp-app-list">
          <li>Cuartos eléctricos y subestaciones</li>
          <li>Generadores y plantas de emergencia</li>
          <li>Centros de carga y tableros grandes</li>
          <li>Salas de máquinas industriales</li>
          <li>Cuartos de UPS de gran capacidad</li>
          <li>Talleres con equipo eléctrico pesado</li>
      </ul></section>
      <section class="pp-block"><h2>Comparativa rápida</h2>
        <table class="pp-table" style="margin-top:0.5rem;"><tbody>
          <tr><td class="pp-table__label">Residuo</td><td class="pp-table__value">CO₂: cero residuo · ABC: residuo corrosivo</td></tr>
          <tr><td class="pp-table__label">Equipo eléctrico grande</td><td class="pp-table__value">CO₂ 10 kg: ideal</td></tr>
          <tr><td class="pp-table__label">Montaje</td><td class="pp-table__value">Carretilla / soporte reforzado</td></tr>
          <tr><td class="pp-table__label">Mejor uso</td><td class="pp-table__value">Subestaciones, generadores, cuartos eléctricos</td></tr>
        </tbody></table>
      </section>
      <section class="pp-block"><h2>Cumplimiento Normativo</h2>
        <p>Este extintor cumple con la <strong>NOM-154-SCFI</strong> para mantenimiento y recarga y <strong>NFPA 10</strong> como referencia internacional. La <strong>NOM-002-STPS</strong> establece los requerimientos de protección contra incendios en centros de trabajo. Cada unidad se entrega con documentación para tu expediente de Protección Civil.</p>
      </section>
    `,
    waSidebar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20CO%E2%82%82%2010%20kg",
    caracteristicas: [
      "CO₂ gaseoso · 10 kg · ~12 s descarga · 2.5–3 m alcance · Carretilla o soporte reforzado",
      "Certificado NOM-154-SCFI con collar de garantía",
      "Recargable — servicio de recarga en CDMX",
      "Entrega el mismo día en zona metropolitana",
      "Documentación para Protección Civil incluida"
    ],
    aplicaciones: [
      "Cuartos eléctricos y subestaciones",
      "Generadores y plantas de emergencia",
      "Centros de carga y tableros grandes",
      "Salas de máquinas industriales",
      "Cuartos de UPS de gran capacidad",
      "Talleres con equipo eléctrico pesado"
    ],
    productos: {
      titulo: "Otros Extintores",
      extraHtml: `<li><a href="/extintores/co2/">Ver todo Extintores CO₂</a></li>
          <li><a href="/extintores/polvo-seco/">Polvo Seco PQS</a></li>
          <li><a href="/extintores/co2/">CO₂</a></li>
          <li><a href="/extintores/tipo-k/">Tipo K — Cocinas</a></li>
          <li><a href="/extintores/afff/">AFFF — Espuma</a></li>`,
    },
    servicios: { linkLabel: "Ver todos los servicios →" },
    cotizarTitulo: "Cotiza CO₂ 10 kg",
    cotizarPerks: ["Asesoría técnica sin costo", "Entrega el mismo día en CDMX", "Factura electrónica disponible"],
    waCotizar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20CO%E2%82%82%2010%20kg",
    faqSubtitulo: "Todo sobre el extintor CO₂ 10 kg",
    pageId: "co2-10-kg",
    faqs: [
      {
        pregunta: "¿Qué clases de fuego apaga el CO₂ 10 kg?",
        respuesta: "Está certificado para fuegos <strong>B · C</strong>. El CO₂ de 10 kg entrega la <strong>mayor capacidad portátil</strong> de la línea de dióxido de carbono. Apaga sin residuo, protegiendo equipo eléctrico de gran valor sin daño secundario por polvo o humedad.",
      },
      {
        pregunta: "¿Por qué el CO₂ es ideal para cuartos eléctricos?",
        respuesta: "Porque <strong>no conduce electricidad y no deja residuo</strong>. Apaga desplazando el oxígeno, sin dañar tableros, generadores ni instalaciones. Tras la descarga, el equipo queda limpio y operable, a diferencia del polvo ABC.",
      },
      {
        pregunta: "¿Requiere montaje especial el de 10 kg?",
        respuesta: "Sí. Por su peso (~28 kg cargado) se entrega sobre <strong>carretilla o soporte reforzado</strong> para movilidad y acceso inmediato en el área protegida.",
      },
      {
        pregunta: "¿Cada cuánto requiere mantenimiento?",
        respuesta: "Conforme a <strong>NOM-154-SCFI</strong>, requiere mantenimiento anual y prueba hidrostática del cilindro cada 5 años. Ofrecemos pólizas de mantenimiento preventivo en CDMX y Estado de México.",
      },
      {
        pregunta: "¿Puedo recargarlo en CDMX?",
        respuesta: "Sí. Ofrecemos servicio de recarga con verificación, revisión y collar de garantía NOM-154-SCFI. Llámanos al <strong>56 2759 6245</strong> o escríbenos por WhatsApp.",
      }
    ],
  },

  "afff/afff-9-l": {
    seo: {
      title: "Extintor AFFF 9 Litros — Espuma para Líquidos Inflamables | Proyecto Red",
      description: "Extintor AFFF 9 L de espuma filmógena para gasolina, aceites y solventes. Clase B. Certif. NOM-154-SCFI. Para talleres, gasolineras y plantas. Entrega CDMX.",
    },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Extintores", href: "/extintores/" },
      { label: "AFFF — Espuma", href: "/extintores/afff/" },
      { label: "AFFF 9 Litros" },
    ],
    heroStats: [
      { valor: "9 L",    label: "Capacidad" },
      { valor: "A · B", label: "Clases de fuego" },
      { valor: "3–6 m",  label: "Alcance" },
    ],
    heroBadge: `Espuma Filmógena · Clase A y B · NOM-154-SCFI`,
    heroTitle: `Extintor AFFF<br><span class="h1-accent">9 Litros</span>`,
    heroSub: `Extintor de espuma AFFF portátil de 9 litros. Forma una película filmógena sobre el combustible que sella los vapores y previene la re-ignición — el estándar para gasolina, aceites, solventes y cualquier líquido inflamable clase B. Alcance de 3 a 6 metros.`,
    waHero: "Hola%2C%20necesito%20cotizar%20el%20extintor%20AFFF%20de%209%20litros",
    btnSecundario: { href: "/extintores/afff/", label: "Ver Catálogo AFFF" },
    heroRight: `<p>El extintor AFFF de 9 litros es el más solicitado para operación manual en talleres mecánicos, gasolineras y áreas con riesgo de derrame de combustible. Portátil y de fácil transporte entre ubicaciones.</p>
        <p>La espuma AFFF actúa por doble mecanismo: forma una <strong>película filmógena</strong> sobre la superficie del líquido que sella el vapor combustible y enfría simultáneamente la zona del fuego. Esta doble acción la hace especialmente eficiente contra re-ignición. Cada unidad se entrega con lanza atomizadora, collar de garantía NOM-154-SCFI y documentación para expediente de Protección Civil.</p>`,
    mainIntro: `      <div class="pp-gallery">
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/afff.avif?strip=all&lossy=1" alt="Extintor AFFF 9 litros - Vista frontal con lanza atomizadora NOM-154-SCFI" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/afff/galeria-1.avif?strip=all&lossy=1" alt="Extintor AFFF 9 litros - Detalle lanza y válvula de corte para líquidos" width="400" height="300" loading="eager" />
        </div>
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/afff/galeria-2.avif?strip=all&lossy=1" alt="Extintor AFFF 9 litros - Instalación en estación de servicio gasolinera" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/afff/galeria-3.avif?strip=all&lossy=1" alt="Extintor AFFF 9 litros - Placa NOM-154-SCFI y collar de garantía incluido" width="400" height="300" loading="eager" />
        </div>
      </div>

      <div class="pp-desc">
        <p>El extintor AFFF de 9 litros actúa generando una <strong>película acuosa (Aqueous Film Forming Foam)</strong> sobre la superficie del líquido inflamable. Esta película sella los vapores combustibles e impide que alcancen el punto de re-ignición — incluso después de terminada la descarga.</p>
        <p>La solución AFFF al <strong>3 o 6%</strong> se mezcla con agua y se descarga como espuma expansible a través de la lanza atomizadora con válvula de corte. Actúa eficientemente sobre fuegos clase A (sólidos) y clase B (líquidos inflamables). <strong>No usar en fuegos eléctricos</strong> (clase C).</p>
        <p><strong>Capacidad:</strong> 9 L. <strong>Clases:</strong> A y B. <strong>Certificación:</strong> NOM-154-SCFI, NFPA 10, UL 8.</p>
      </div>

      `,
    specs: [
      { label: "Agente extintor",       value: "Espuma AFFF al 3–6% (Aqueous Film Forming Foam)" },
      { label: "Capacidad nominal",     value: "9 litros de solución" },
      { label: "Clases de fuego",       value: "A (sólidos) · B (líquidos inflamables)" },
      { label: "Mecanismo de acción",   value: "Película filmógena + enfriamiento dual" },
      { label: "Tiempo de descarga",    value: "~8 segundos" },
      { label: "Alcance de descarga",   value: "3–6 metros" },
      { label: "Presión de trabajo",    value: "100 PSI (6.9 bar) — presión permanente" },
      { label: "Gas propelente",        value: "Nitrógeno seco (N₂)" },
      { label: "Temperatura operación", value: "+4 °C a +50 °C" },
      { label: "Boquilla",              value: "Lanza atomizadora con válvula de corte" },
      { label: "Manguera",              value: "Incluida — manguera reforzada flexible" },
      { label: "Altura del cilindro",   value: "~60 cm" },
      { label: "Peso total cargado",    value: "~12.5 kg" },
      { label: "Material cilindro",     value: "Acero al carbón, pintura electrostática roja" },
      { label: "Certificación",         value: "NOM-154-SCFI · NFPA 10 · UL 8" },
      { label: "Incluye",               value: "Lanza, manguera, soporte de pared, etiqueta, collar de garantía" },
      { label: "Vida útil cilindro",    value: "20 años (prueba hidrostática c/5)" },
      { label: "Mantenimiento",         value: "Anual NOM-154-SCFI — inspección de solución y concentración" },
    ],
    mainResto: `      <section class="pp-block">
        <h2>Características Destacadas</h2>
        <ul class="pp-features">
          <li><strong>Película filmógena anti-re-ignición</strong> — La capa de espuma sobre el combustible persiste después de la descarga, evitando que los vapores reinicien la combustión. Ventaja clave frente al polvo seco que no previene re-ignición en derrames de combustible.</li>
          <li><strong>Doble mecanismo de acción — sofoca y enfría</strong> — El sofocamiento por la capa filmógena se combina con el enfriamiento del agua en la solución. Esto lo hace el agente más efectivo para fuegos clase B en derrames controlados.</li>
          <li><strong>Lanza atomizadora con válvula de corte</strong> — Permite iniciar y detener la descarga sin agotar el agente. La técnica correcta es aplicar en ráfagas cortas sobre la superficie adyacente al derrame para que la espuma caiga suavemente sin dispersar el líquido.</li>
          <li><strong>Portátil y de fácil reubicación</strong> — Con 12.5 kg de peso total, el modelo de 9 litros es manejable por un solo operador. Ideal para instalaciones donde se necesita mover el extintor entre distintos puntos de riesgo.</li>
          <li><strong>Documentación completa para expediente</strong> — Cada unidad se entrega con ficha técnica, certificado de conformidad NOM-154-SCFI, collar de garantía y etiqueta de inspección para integrarse al expediente de Protección Civil y STPS.</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>Aplicaciones</h2>
        <ul class="pp-app-list">
          <li>Estaciones de servicio y gasolineras (pistas de despacho)</li>
          <li>Talleres mecánicos, hojalatería y pintura automotriz</li>
          <li>Plantas químicas y farmacéuticas con solventes</li>
          <li>Bodegas con aceites lubricantes o combustibles</li>
          <li>Plantas de pintura y acabados industriales</li>
          <li>Helipuertos y zonas de aviación ligera o privada</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>Instalación y Ubicación</h2>
        <p>El extintor AFFF de 9 litros se instala en soporte de pared a una altura de <strong>manija entre 1.0 y 1.5 metros</strong> conforme a NOM-002-STPS. En gasolineras: uno en cada extremo de la isla de despacho, a no más de <strong>10 metros del riesgo</strong> que protege. En talleres: en el acceso al área de trabajo, visible y despejado en todo momento.</p>
        <p>Importante: no instalar en zonas donde la temperatura supere los 50 °C de manera habitual (cerca de fuentes de calor intenso). La solución AFFF puede degradarse a temperaturas extremas. El extintor debe estar <strong>al alcance antes de llegar al fuego</strong>, nunca al fondo del área de riesgo.</p>
      </section>

      <section class="pp-block">
        <h2>Cumplimiento Normativo</h2>
        <p>Cumple con <strong>NOM-154-SCFI</strong> para mantenimiento y recarga anual. La <strong>NFPA 10</strong> establece la selección, instalación y mantenimiento de extintores portátiles. La <strong>UL 8</strong> certifica extintores de espuma bajo estándares Underwriters Laboratories. La <strong>NOM-002-STPS</strong> regula la prevención y combate de incendios en centros de trabajo. Documentación completa para cumplimiento de Protección Civil y STPS.</p>
      </section>

      <section class="pp-block">
        <h2>Resumen de Especificaciones</h2>
        <div class="pp-specs-mini">
          <div class="pp-specs-mini__item"><span>Capacidad</span><span>9 litros</span></div>
          <div class="pp-specs-mini__item"><span>Clases de fuego</span><span>A · B</span></div>
          <div class="pp-specs-mini__item"><span>Certificación</span><span>NOM-154-SCFI, NFPA 10</span></div>
          <div class="pp-specs-mini__item"><span>Descarga</span><span>~8 segundos</span></div>
          <div class="pp-specs-mini__item"><span>Categoría</span><span>Extintores AFFF Espuma</span></div>
          <div class="pp-specs-mini__item"><span>Alcance</span><span>3–6 metros</span></div>
        </div>
      </section>

    `,
    nav: {
      titulo: "Extintores AFFF",
      ariaLabel: "Capacidades de extintores AFFF",
      items: [
        { label: "AFFF 9 L — Portátil",     href: "/extintores/afff/afff-9-l/", active: true },
        { label: "AFFF 20 L — Carretilla",  href: "/extintores/afff/" },
        { label: "AFFF 50 L — Industrial",  href: "/extintores/afff/" },
      ],
      backHref: "/extintores/afff/",
      backLabel: "← Ver todo el catálogo AFFF",
    },
    waSidebar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20AFFF%20de%209%20litros",
    caracteristicas: [
      "Película filmógena que sella derrames y previene re-ignición",
      "Doble acción: sofoca y enfría simultáneamente",
      "Lanza atomizadora con válvula de corte para descarga controlada",
      "Collar de garantía NOM-154-SCFI con fecha de próximo servicio",
    ],
    sidebarCerts: { titulo: "Certificaciones Disponibles", html: `<div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-154-SCFI</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-002-STPS</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NFPA</span><span class="sb__cert-name">NFPA 10</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">UL</span><span class="sb__cert-name">UL 8 — Foam Extinguishers</span></div>` },
    sidebarBrands: { titulo: "Marcas que Manejamos", items: ["Proyecto Red — Marca propia", "Extintores certificados NOM"], note: "Pregunta por otras marcas" },
    aplicaciones: [
      "Estaciones de servicio y gasolineras",
      "Talleres mecánicos y de hojalatería",
      "Plantas químicas y farmacéuticas",
      "Bodegas con aceites lubricantes o solventes",
      "Plantas de pintura y acabados industriales",
      "Helipuertos y zonas de aviación privada",
    ],
    productos: {
      titulo: "Productos Relacionados",
      relacionados: [
        { nombre: "AFFF 20 L — Carretilla", href: "/extintores/afff/" },
        { nombre: "AFFF 50 L — Industrial", href: "/extintores/afff/" },
        { nombre: "PQS 6 kg — Talleres",    href: "/extintores/polvo-seco/" },
        { nombre: "CO₂ 5 kg — Cuartos eléctricos", href: "/extintores/co2/co2-5-kg/" },
      ],
      extraHtml: `<li><a href="/extintores/tipo-k/">Extintores Tipo K</a></li>
          <li><a href="/extintores/polvo-seco/">Extintores PQS Polvo Seco</a></li>`,
    },
    servicios: { desc: "Complementa tu compra con mantenimiento y capacitación profesional.", linkLabel: "¿Necesitas más servicios? Ver todos →" },
    otros: {
      titulo: "Otros Extintores en Nuestra Línea",
      sub: "Explora más opciones según tu aplicación específica",
      linkHref: "/extintores/afff/",
      linkLabel: "Ver todo el catálogo AFFF →",
      items: [
        {
          nombre: "AFFF 20 L — Carretilla",
          desc: "Para estaciones de servicio y plantas químicas de mediano volumen. Sobre carretilla de acero para movilidad.",
          specs: ["20 L", "~12 s", "4–6 m"],
          href: "/extintores/afff/",
          img: "https://ewvydcs5uyw.exactdn.com/imagenes/extintores/afff.avif?strip=all&lossy=1",
        },
        {
          nombre: "AFFF 50 L — Industrial",
          desc: "Para plantas petroquímicas y parques de almacenamiento de combustible. Máxima capacidad portátil.",
          specs: ["50 L", "~18 s", "5–8 m"],
          href: "/extintores/afff/",
          img: "https://ewvydcs5uyw.exactdn.com/imagenes/extintores/afff.avif?strip=all&lossy=1",
        },
        {
          nombre: "PQS 6 kg — Talleres",
          desc: "Complemento clase A·B·C para las áreas del taller sin riesgo de derrame de combustible.",
          specs: ["6 kg", "A·B·C", "NOM-154"],
          href: "/extintores/polvo-seco/",
          img: "https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco.avif?strip=all&lossy=1",
        },
        {
          nombre: "CO₂ 5 kg — Cuartos eléctricos",
          desc: "Para tableros y cuartos eléctricos dentro del taller o planta. Sin residuo, sin daño al equipo.",
          specs: ["5 kg", "B·C", "0 residuo"],
          href: "/extintores/co2/co2-5-kg/",
          img: "https://ewvydcs5uyw.exactdn.com/imagenes/extintores/co2.avif?strip=all&lossy=1",
        },
      ],
      ctaCorto: true,
    },
    cotizarTitulo: "Cotiza Extintor AFFF 9 Litros",
    cotizarPerks: ["Asesoría técnica sin costo", "Entrega el mismo día en CDMX", "Factura electrónica disponible"],
    waCotizar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20AFFF%209%20litros.%20Mi%20nombre%20es%3A",
    faqSubtitulo: "Todo sobre el extintor AFFF de espuma 9 litros",
    pageId: "afff-9-l",
    faqs: [
      {
        pregunta: "¿Qué diferencia hay entre AFFF y espuma AR-AFFF?",
        respuesta: "El AFFF estándar es eficaz en <strong>hidrocarburos</strong> (gasolina, diésel, aceites minerales). El <strong>AR-AFFF</strong> (Alcohol Resistant) agrega un polímero que también lo hace eficaz en <strong>solventes polares</strong> como alcoholes, cetonas y ésteres — los cuales disuelven la película del AFFF normal. Si tu instalación maneja alcoholes o solventes polares, debes especificar AR-AFFF al cotizar.",
      },
      {
        pregunta: "¿El AFFF daña el medioambiente?",
        respuesta: "Los AFFF tradicionales contienen <strong>PFAS</strong> (sustancias per y polifluoroalquiladas) que persisten en el ambiente. A nivel mundial se están sustituyendo por formulaciones <strong>fluorine-free (FFFP)</strong>. En Proyecto Red ofrecemos ambas opciones — si tienes restricciones ambientales, certificación ISO 14001 o políticas de sustentabilidad, cotizamos la versión libre de fluorine sin costo adicional en asesoría.",
      },
      {
        pregunta: "¿El AFFF sirve para fuegos eléctricos?",
        respuesta: "No. La espuma AFFF <strong>contiene agua y conduce electricidad</strong>. Nunca debe aplicarse sobre equipos eléctricos energizados. Si hay un fuego con componente eléctrico (clase C), usa primero CO₂ o agente limpio para apagar el fuego eléctrico, luego puedes aplicar AFFF sobre el derrame de combustible si persiste.",
      },
      {
        pregunta: "¿Cómo se aplica correctamente la espuma AFFF?",
        respuesta: "La técnica correcta es <strong>no apuntar directamente sobre el líquido</strong> en llamas — esto dispersa el derrame y extiende el fuego. Se dirige la lanza contra una pared o superficie adyacente para que la espuma caiga suavemente formando la película. En derrames al aire libre se aplica desde el borde más cercano barriendo hacia el opuesto.",
      },
      {
        pregunta: "¿Qué capacidad de AFFF necesito en mi estación de servicio?",
        respuesta: "La distribución estándar para una gasolinera es: <strong>al menos 2 extintores de 9 litros por isla de despacho</strong>, más uno de 20 litros en el área de compresores y toma de combustible. La distribución exacta depende del layout, número de pistolas y volumen de despacho. Te hacemos el levantamiento sin costo.",
      },
      {
        pregunta: "¿Proyecto Red recarga y mantiene extintores AFFF?",
        respuesta: "Sí. Recargamos extintores AFFF de cualquier marca. El mantenimiento anual incluye verificación de la <strong>concentración de la solución</strong>, inspección de la lanza y manguera, revisión del manómetro y collar de garantía con reporte para auditorías. La solución AFFF puede degradarse — la NOM-154-SCFI exige revisión anual obligatoria.",
      },
    ],
  },

  "afff/afff-20-l": {
    seo: { title: "Extintor AFFF 20 L — Espuma para Gasolineras y Plantas Químicas | Proyecto Red", description: "Extintor AFFF 20 L sobre carretilla para estaciones de servicio, plantas químicas y zonas de combustible. Espuma para líquidos inflamables. Clase A y B. NOM-154-SCFI. CDMX." },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Extintores", href: "/extintores/" },
      { label: "AFFF", href: "/extintores/afff/" },
      { label: "AFFF 20 L" },
    ],
    heroBadge: `Clase A·B · Carretilla · NOM-154-SCFI`,
    heroTitle: `Extintor AFFF<br><span class="h1-accent">20 L — Carretilla</span>`,
    heroSub: `El extintor AFFF de 20 L sobre carretilla es para estaciones de servicio, plantas químicas y zonas de combustible de mediano volumen. La espuma forma una película que sella el vapor y evita la re-ignición.`,
    waHero: "Hola%2C%20necesito%20cotizar%20el%20extintor%20AFFF%2020%20L",
    btnSecundario: { href: "/extintores/afff/", label: "Ver Catálogo" },
    heroRight: `<p>La espuma AFFF forma una <strong>película acuosa sobre el líquido inflamable</strong> que sella el vapor combustible y enfría la zona simultáneamente. Esta doble acción es especialmente eficaz en fuegos Clase B con riesgo de derrame.</p><p>La capacidad de 20 L se monta sobre <strong>carretilla de acero</strong> para movilidad dentro del sitio, con manguera de 5 m para cubrir derrames extensos en estaciones de servicio y plantas de mediano volumen.</p>`,
    mainIntro: `      <div class="pp-gallery">
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/afff/afff-20l-extintor-gasolinera-taller.avif?strip=all&lossy=1" alt="Extintor AFFF 20 L — Vista frontal" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/afff/galeria-2.avif?strip=all&lossy=1" alt="Extintor AFFF 20 L — Detalle válvula" width="400" height="300" loading="eager" />
        </div>
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/afff/galeria-3.avif?strip=all&lossy=1" alt="Extintor AFFF 20 L — Aplicación profesional" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/afff/afff-20l-extintor-gasolinera-taller.avif?strip=all&lossy=1" alt="Extintor AFFF 20 L — Instalación CDMX" width="400" height="300" loading="lazy" />
        </div>
      </div>
      <div class="pp-desc">
        <p>El extintor AFFF de 20 L es la capacidad de carretilla para riesgos de líquidos inflamables de mediano volumen. La espuma forma una película filmógena que sella el vapor y enfría, cortando la fuente del fuego y evitando que se reavive.</p><p>Su carretilla de acero y manguera de 5 m permiten cubrir derrames extensos en estaciones de servicio y plantas químicas. Es el equipo intermedio entre el portátil de 9 L y el industrial de 50 L.</p>
        <p><strong>Capacidad:</strong> 20 L. <strong>Clases:</strong> A · B. <strong>Agente:</strong> Espuma AFFF (formadora de película acuosa). <strong>Certificación:</strong> NOM-154-SCFI, NFPA 10.</p>
      </div>
      `,
    specs: [
      { label: "Agente extintor", value: "Espuma AFFF (formadora de película acuosa)" },
      { label: "Clases de fuego", value: "A · B" },
      { label: "Capacidad nominal", value: "20 L" },
      { label: "Tiempo de descarga", value: "~12 segundos" },
      { label: "Alcance / descarga", value: "4–6 m" },
      { label: "Presión de trabajo", value: "~14 bar" },
      { label: "Altura aprox.", value: "~75 cm" },
      { label: "Diámetro aprox.", value: "~25 cm" },
      { label: "Peso total cargado", value: "~32 kg" },
      { label: "Material", value: "Acero, pintura electrostática roja" },
      { label: "Certificación", value: "NOM-154-SCFI · NFPA 10" },
      { label: "Incluye", value: "Soporte/carretilla según modelo, etiqueta, collar de garantía" },
      { label: "Mantenimiento", value: "Anual obligatorio (NOM-154-SCFI) · Prueba hidrostática c/5 años" }
    ],
    mainResto: `      <section class="pp-block"><h2>Aplicaciones</h2><ul class="pp-app-list">
          <li>Estaciones de servicio (gasolina y diésel)</li>
          <li>Plantas químicas de mediano volumen</li>
          <li>Zonas de almacenamiento de combustible</li>
          <li>Talleres con tanques y solventes</li>
          <li>Áreas de trasiego de líquidos inflamables</li>
          <li>Bodegas de pinturas y solventes</li>
      </ul></section>
      <section class="pp-block"><h2>Comparativa rápida</h2>
        <table class="pp-table" style="margin-top:0.5rem;"><tbody>
          <tr><td class="pp-table__label">Líquidos inflamables (B)</td><td class="pp-table__value">AFFF: sella vapor + enfría</td></tr>
          <tr><td class="pp-table__label">Re-ignición</td><td class="pp-table__value">AFFF: la evita · Polvo: posible</td></tr>
          <tr><td class="pp-table__label">Clase C eléctrico</td><td class="pp-table__value">AFFF: no recomendado</td></tr>
          <tr><td class="pp-table__label">Mejor uso</td><td class="pp-table__value">Gasolineras, plantas químicas, combustible</td></tr>
        </tbody></table>
      </section>
      <section class="pp-block"><h2>Cumplimiento Normativo</h2>
        <p>Este extintor cumple con la <strong>NOM-154-SCFI</strong> para mantenimiento y recarga y <strong>NFPA 10</strong> como referencia internacional. La <strong>NOM-002-STPS</strong> establece los requerimientos de protección contra incendios en centros de trabajo. Cada unidad se entrega con documentación para tu expediente de Protección Civil.</p>
      </section>
    `,
    waSidebar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20AFFF%2020%20L",
    caracteristicas: [
      "AFFF 3–6% · 20 litros · ~12 s descarga · 4–6 m alcance · Carretilla de acero · Manguera 5 m",
      "Certificado NOM-154-SCFI con collar de garantía",
      "Recargable — servicio de recarga en CDMX",
      "Entrega el mismo día en zona metropolitana",
      "Documentación para Protección Civil incluida"
    ],
    aplicaciones: [
      "Estaciones de servicio (gasolina y diésel)",
      "Plantas químicas de mediano volumen",
      "Zonas de almacenamiento de combustible",
      "Talleres con tanques y solventes",
      "Áreas de trasiego de líquidos inflamables",
      "Bodegas de pinturas y solventes"
    ],
    productos: {
      titulo: "Otros Extintores",
      extraHtml: `<li><a href="/extintores/afff/">Ver todo Extintores AFFF</a></li>
          <li><a href="/extintores/polvo-seco/">Polvo Seco PQS</a></li>
          <li><a href="/extintores/co2/">CO₂</a></li>
          <li><a href="/extintores/tipo-k/">Tipo K — Cocinas</a></li>
          <li><a href="/extintores/afff/">AFFF — Espuma</a></li>`,
    },
    servicios: { linkLabel: "Ver todos los servicios →" },
    cotizarTitulo: "Cotiza AFFF 20 L",
    cotizarPerks: ["Asesoría técnica sin costo", "Entrega el mismo día en CDMX", "Factura electrónica disponible"],
    waCotizar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20AFFF%2020%20L",
    faqSubtitulo: "Todo sobre el extintor AFFF 20 L",
    pageId: "afff-20-l",
    faqs: [
      {
        pregunta: "¿Qué clases de fuego apaga el AFFF 20 L?",
        respuesta: "Está certificado para fuegos <strong>A · B</strong>. La espuma AFFF forma una <strong>película acuosa sobre el líquido inflamable</strong> que sella el vapor combustible y enfría la zona simultáneamente. Esta doble acción es especialmente eficaz en fuegos Clase B con riesgo de derrame.",
      },
      {
        pregunta: "¿Por qué espuma AFFF y no polvo para líquidos inflamables?",
        respuesta: "Porque la espuma AFFF <strong>sella el vapor y enfría</strong>, evitando la re-ignición del líquido, mientras que el polvo apaga la llama pero no impide que el combustible caliente se reavive. Para derrames de gasolina, diésel o solventes, AFFF es más eficaz.",
      },
      {
        pregunta: "¿El AFFF sirve para fuegos eléctricos (Clase C)?",
        respuesta: "No directamente — al ser acuoso, <strong>no se recomienda sobre equipo eléctrico energizado</strong>. Para riesgo eléctrico usa CO₂ o agente limpio. El AFFF es para Clase A y B (sólidos y líquidos inflamables).",
      },
      {
        pregunta: "¿Cada cuánto requiere mantenimiento?",
        respuesta: "Conforme a <strong>NOM-154-SCFI</strong>, requiere mantenimiento anual y prueba hidrostática del cilindro cada 5 años. Ofrecemos pólizas de mantenimiento preventivo en CDMX y Estado de México.",
      },
      {
        pregunta: "¿Puedo recargarlo en CDMX?",
        respuesta: "Sí. Ofrecemos servicio de recarga con verificación, revisión y collar de garantía NOM-154-SCFI. Llámanos al <strong>56 2759 6245</strong> o escríbenos por WhatsApp.",
      }
    ],
  },

  "afff/afff-50-l": {
    seo: { title: "Extintor AFFF 50 L — Espuma Industrial para Plantas Petroquímicas | Proyecto Red", description: "Extintor AFFF 50 L rodante para plantas petroquímicas, parques de combustible y zonas de alto riesgo de derrame. Capacidad máxima portátil. Clase A y B. NOM-154-SCFI. CDMX." },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Extintores", href: "/extintores/" },
      { label: "AFFF", href: "/extintores/afff/" },
      { label: "AFFF 50 L" },
    ],
    heroBadge: `Clase A·B · Rodante industrial · NOM-154-SCFI`,
    heroTitle: `Extintor AFFF<br><span class="h1-accent">50 L — Industrial</span>`,
    heroSub: `El extintor AFFF de 50 L rodante es para plantas petroquímicas, parques de almacenamiento de combustible y zonas de alto riesgo de derrame. Es la capacidad máxima portátil para fuegos de líquidos inflamables.`,
    waHero: "Hola%2C%20necesito%20cotizar%20el%20extintor%20AFFF%2050%20L",
    btnSecundario: { href: "/extintores/afff/", label: "Ver Catálogo" },
    heroRight: `<p>Con 50 litros de agente, este equipo entrega la <strong>mayor capacidad portátil</strong> de espuma AFFF, para controlar derrames extensos de líquidos inflamables en instalaciones de alto riesgo.</p><p>Montado sobre <strong>carretilla reforzada</strong> con manguera de 8 m, cubre grandes superficies en parques de combustible y plantas petroquímicas, sellando el vapor y enfriando para evitar la re-ignición.</p>`,
    mainIntro: `      <div class="pp-gallery">
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/afff/afff-50l-extintor-rodante-planta-quimica.avif?strip=all&lossy=1" alt="Extintor AFFF 50 L — Vista frontal" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/afff/galeria-2.avif?strip=all&lossy=1" alt="Extintor AFFF 50 L — Detalle válvula" width="400" height="300" loading="eager" />
        </div>
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/afff/galeria-3.avif?strip=all&lossy=1" alt="Extintor AFFF 50 L — Aplicación profesional" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/afff/afff-50l-extintor-rodante-planta-quimica.avif?strip=all&lossy=1" alt="Extintor AFFF 50 L — Instalación CDMX" width="400" height="300" loading="lazy" />
        </div>
      </div>
      <div class="pp-desc">
        <p>El extintor AFFF de 50 L es la máxima capacidad portátil para fuegos de líquidos inflamables. Está diseñado para instalaciones de alto riesgo donde un derrame puede ser extenso: plantas petroquímicas, parques de combustible y terminales.</p><p>Su carretilla reforzada y manguera de 8 m permiten atacar derrames de gran superficie manteniendo distancia segura. La película AFFF sella el vapor y enfría, evitando que el combustible se reavive.</p>
        <p><strong>Capacidad:</strong> 50 L. <strong>Clases:</strong> A · B. <strong>Agente:</strong> Espuma AFFF (formadora de película acuosa). <strong>Certificación:</strong> NOM-154-SCFI, NFPA 10.</p>
      </div>
      `,
    specs: [
      { label: "Agente extintor", value: "Espuma AFFF (formadora de película acuosa)" },
      { label: "Clases de fuego", value: "A · B" },
      { label: "Capacidad nominal", value: "50 L" },
      { label: "Tiempo de descarga", value: "~18 segundos" },
      { label: "Alcance / descarga", value: "5–8 m" },
      { label: "Presión de trabajo", value: "~14 bar" },
      { label: "Altura aprox.", value: "~95 cm" },
      { label: "Diámetro aprox.", value: "~35 cm" },
      { label: "Peso total cargado", value: "~75 kg" },
      { label: "Material", value: "Acero, pintura electrostática roja" },
      { label: "Certificación", value: "NOM-154-SCFI · NFPA 10" },
      { label: "Incluye", value: "Soporte/carretilla según modelo, etiqueta, collar de garantía" },
      { label: "Mantenimiento", value: "Anual obligatorio (NOM-154-SCFI) · Prueba hidrostática c/5 años" }
    ],
    mainResto: `      <section class="pp-block"><h2>Aplicaciones</h2><ul class="pp-app-list">
          <li>Plantas petroquímicas y refinación</li>
          <li>Parques de almacenamiento de combustible</li>
          <li>Terminales y zonas de trasiego</li>
          <li>Plantas químicas de alto volumen</li>
          <li>Áreas de tanques de gran capacidad</li>
          <li>Instalaciones con riesgo de derrame extenso</li>
      </ul></section>
      <section class="pp-block"><h2>Comparativa rápida</h2>
        <table class="pp-table" style="margin-top:0.5rem;"><tbody>
          <tr><td class="pp-table__label">Líquidos inflamables (B)</td><td class="pp-table__value">AFFF 50 L: derrames extensos</td></tr>
          <tr><td class="pp-table__label">Capacidad</td><td class="pp-table__value">Máxima portátil — 50 L</td></tr>
          <tr><td class="pp-table__label">Movilidad</td><td class="pp-table__value">Carretilla reforzada + manguera 8 m</td></tr>
          <tr><td class="pp-table__label">Mejor uso</td><td class="pp-table__value">Petroquímica, parques de combustible</td></tr>
        </tbody></table>
      </section>
      <section class="pp-block"><h2>Cumplimiento Normativo</h2>
        <p>Este extintor cumple con la <strong>NOM-154-SCFI</strong> para mantenimiento y recarga y <strong>NFPA 10</strong> como referencia internacional. La <strong>NOM-002-STPS</strong> establece los requerimientos de protección contra incendios en centros de trabajo. Cada unidad se entrega con documentación para tu expediente de Protección Civil.</p>
      </section>
    `,
    waSidebar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20AFFF%2050%20L",
    caracteristicas: [
      "AFFF 3–6% · 50 litros · ~18 s descarga · 5–8 m alcance · Carretilla reforzada · Manguera 8 m",
      "Certificado NOM-154-SCFI con collar de garantía",
      "Recargable — servicio de recarga en CDMX",
      "Entrega el mismo día en zona metropolitana",
      "Documentación para Protección Civil incluida"
    ],
    aplicaciones: [
      "Plantas petroquímicas y refinación",
      "Parques de almacenamiento de combustible",
      "Terminales y zonas de trasiego",
      "Plantas químicas de alto volumen",
      "Áreas de tanques de gran capacidad",
      "Instalaciones con riesgo de derrame extenso"
    ],
    productos: {
      titulo: "Otros Extintores",
      extraHtml: `<li><a href="/extintores/afff/">Ver todo Extintores AFFF</a></li>
          <li><a href="/extintores/polvo-seco/">Polvo Seco PQS</a></li>
          <li><a href="/extintores/co2/">CO₂</a></li>
          <li><a href="/extintores/tipo-k/">Tipo K — Cocinas</a></li>
          <li><a href="/extintores/afff/">AFFF — Espuma</a></li>`,
    },
    servicios: { linkLabel: "Ver todos los servicios →" },
    cotizarTitulo: "Cotiza AFFF 50 L",
    cotizarPerks: ["Asesoría técnica sin costo", "Entrega el mismo día en CDMX", "Factura electrónica disponible"],
    waCotizar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20AFFF%2050%20L",
    faqSubtitulo: "Todo sobre el extintor AFFF 50 L",
    pageId: "afff-50-l",
    faqs: [
      {
        pregunta: "¿Qué clases de fuego apaga el AFFF 50 L?",
        respuesta: "Está certificado para fuegos <strong>A · B</strong>. Con 50 litros de agente, este equipo entrega la <strong>mayor capacidad portátil</strong> de espuma AFFF, para controlar derrames extensos de líquidos inflamables en instalaciones de alto riesgo.",
      },
      {
        pregunta: "¿Cuándo se necesita un AFFF de 50 L?",
        respuesta: "En instalaciones de <strong>alto riesgo de derrame extenso</strong> — petroquímica, parques de combustible, terminales — donde un equipo menor no cubre la superficie. Es la máxima capacidad portátil antes de sistemas fijos de espuma.",
      },
      {
        pregunta: "¿Reemplaza a un sistema fijo de espuma?",
        respuesta: "No. Es un <strong>equipo portátil de respuesta rápida</strong>; las instalaciones de muy alto riesgo suelen requerir además sistemas fijos de supresión por espuma. Te asesoramos sobre qué exige tu nivel de riesgo.",
      },
      {
        pregunta: "¿Cada cuánto requiere mantenimiento?",
        respuesta: "Conforme a <strong>NOM-154-SCFI</strong>, requiere mantenimiento anual y prueba hidrostática del cilindro cada 5 años. Ofrecemos pólizas de mantenimiento preventivo en CDMX y Estado de México.",
      },
      {
        pregunta: "¿Puedo recargarlo en CDMX?",
        respuesta: "Sí. Ofrecemos servicio de recarga con verificación, revisión y collar de garantía NOM-154-SCFI. Llámanos al <strong>56 2759 6245</strong> o escríbenos por WhatsApp.",
      }
    ],
  },

  "tipo-k/tipo-k-1-7-l": {
    seo: { title: "Extintor Tipo K 1.7 L — Clase K para Food Trucks y Cocinas Pequeñas | Proyecto Red", description: "Extintor Tipo K 1.7 L para food trucks, cocinas móviles y freidoras pequeñas. Agente saponificante para aceites y grasas. Cumple SEDEMA. NOM-002-STPS. CDMX." },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Extintores", href: "/extintores/" },
      { label: "Tipo K", href: "/extintores/tipo-k/" },
      { label: "Tipo K 1.7 L" },
    ],
    heroBadge: `Clase K · Food truck · NFPA 17A`,
    heroTitle: `Extintor Tipo K<br><span class="h1-accent">1.7 L — Food truck</span>`,
    heroSub: `El extintor Tipo K de 1.7 L es la opción compacta para food trucks, cocinas móviles y pequeñas freidoras independientes. Cumple los requisitos de SEDEMA para vehículos con equipo de cocción.`,
    waHero: "Hola%2C%20necesito%20cotizar%20el%20extintor%20Tipo%20K%201.7%20L",
    btnSecundario: { href: "/extintores/tipo-k/", label: "Ver Catálogo" },
    heroRight: `<p>Los fuegos de aceites y grasas superan los <strong>360 °C</strong>, donde el polvo seco y el CO₂ no son eficaces. El agente alcalino acuoso del Tipo K <strong>saponifica</strong> (convierte en jabón) la grasa, apagando la llama y formando una capa que evita la re-ignición.</p><p>La capacidad de 1.7 L es ideal para <strong>espacios reducidos</strong> con una sola freidora o plancha: food trucks, carritos y cocinas móviles que aún así deben cumplir la norma de protección contra incendios.</p>`,
    mainIntro: `      <div class="pp-gallery">
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/tipo-k/tipo-k-1-7gal-extintor-cocina-pequena.avif?strip=all&lossy=1" alt="Extintor Tipo K 1.7 L — Vista frontal" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/tipo-k/galeria-2.avif?strip=all&lossy=1" alt="Extintor Tipo K 1.7 L — Detalle válvula" width="400" height="300" loading="eager" />
        </div>
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/tipo-k/galeria-3.avif?strip=all&lossy=1" alt="Extintor Tipo K 1.7 L — Aplicación profesional" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/tipo-k/tipo-k-1-7gal-extintor-cocina-pequena.avif?strip=all&lossy=1" alt="Extintor Tipo K 1.7 L — Instalación CDMX" width="400" height="300" loading="lazy" />
        </div>
      </div>
      <div class="pp-desc">
        <p>El extintor Tipo K de 1.7 L es la solución compacta para equipos de cocción pequeños. Su agente alcalino acuoso es el único certificado para fuegos Clase K — aceites y grasas a alta temperatura — donde otros agentes fallan o reavivan la llama.</p><p>Es la opción para food trucks y cocinas móviles que deben cumplir con SEDEMA y Protección Civil sin ocupar el espacio de un extintor mayor. Se entrega con documentación lista para tu expediente.</p>
        <p><strong>Capacidad:</strong> 1.7 L. <strong>Clases:</strong> K. <strong>Agente:</strong> Agente alcalino acuoso (acetato de potasio). <strong>Certificación:</strong> NOM-154-SCFI, NFPA 10.</p>
      </div>
      `,
    specs: [
      { label: "Agente extintor", value: "Agente alcalino acuoso (acetato de potasio)" },
      { label: "Clases de fuego", value: "K" },
      { label: "Capacidad nominal", value: "1.7 L" },
      { label: "Tiempo de descarga", value: "~3 segundos" },
      { label: "Alcance / descarga", value: "Niebla fina" },
      { label: "Presión de trabajo", value: "Presión protegida" },
      { label: "Altura aprox.", value: "~40 cm" },
      { label: "Diámetro aprox.", value: "~12 cm" },
      { label: "Peso total cargado", value: "~4 kg" },
      { label: "Material", value: "Acero, pintura electrostática roja" },
      { label: "Certificación", value: "NOM-154-SCFI · NFPA 10" },
      { label: "Incluye", value: "Soporte/carretilla según modelo, etiqueta, collar de garantía" },
      { label: "Mantenimiento", value: "Anual obligatorio (NOM-154-SCFI) · Prueba hidrostática c/5 años" }
    ],
    mainResto: `      <section class="pp-block"><h2>Aplicaciones</h2><ul class="pp-app-list">
          <li>Food trucks y cocinas móviles</li>
          <li>Freidoras pequeñas independientes</li>
          <li>Carritos y puestos de comida</li>
          <li>Cocinas de oficina con freidora</li>
          <li>Comedores pequeños</li>
          <li>Estaciones de cocción individuales</li>
      </ul></section>
      <section class="pp-block"><h2>Comparativa rápida</h2>
        <table class="pp-table" style="margin-top:0.5rem;"><tbody>
          <tr><td class="pp-table__label">Aceites/grasas (Clase K)</td><td class="pp-table__value">Tipo K: único certificado</td></tr>
          <tr><td class="pp-table__label">ABC en grasa</td><td class="pp-table__value">Riesgo de re-ignición</td></tr>
          <tr><td class="pp-table__label">Acción</td><td class="pp-table__value">Saponificación + enfriamiento</td></tr>
          <tr><td class="pp-table__label">Obligatorio</td><td class="pp-table__value">Cocinas con cocción — NFPA 17A</td></tr>
        </tbody></table>
      </section>
      <section class="pp-block"><h2>Cumplimiento Normativo</h2>
        <p>Este extintor cumple con la <strong>NOM-154-SCFI</strong> para mantenimiento y recarga y <strong>NFPA 10</strong> como referencia internacional. La <strong>NOM-002-STPS</strong> establece los requerimientos de protección contra incendios en centros de trabajo. Cada unidad se entrega con documentación para tu expediente de Protección Civil.</p>
      </section>
    `,
    waSidebar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20Tipo%20K%201.7%20L",
    caracteristicas: [
      "Agente alcalino acuoso · 1.7 L · ~3 s descarga · Boquilla niebla fina · Bajo costo",
      "Certificado NOM-154-SCFI con collar de garantía",
      "Recargable — servicio de recarga en CDMX",
      "Entrega el mismo día en zona metropolitana",
      "Documentación para Protección Civil incluida"
    ],
    aplicaciones: [
      "Food trucks y cocinas móviles",
      "Freidoras pequeñas independientes",
      "Carritos y puestos de comida",
      "Cocinas de oficina con freidora",
      "Comedores pequeños",
      "Estaciones de cocción individuales"
    ],
    productos: {
      titulo: "Otros Extintores",
      extraHtml: `<li><a href="/extintores/tipo-k/">Ver todo Extintores Tipo K</a></li>
          <li><a href="/extintores/polvo-seco/">Polvo Seco PQS</a></li>
          <li><a href="/extintores/co2/">CO₂</a></li>
          <li><a href="/extintores/tipo-k/">Tipo K — Cocinas</a></li>
          <li><a href="/extintores/afff/">AFFF — Espuma</a></li>`,
    },
    servicios: { linkLabel: "Ver todos los servicios →" },
    cotizarTitulo: "Cotiza Tipo K 1.7 L",
    cotizarPerks: ["Asesoría técnica sin costo", "Entrega el mismo día en CDMX", "Factura electrónica disponible"],
    waCotizar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20Tipo%20K%201.7%20L",
    faqSubtitulo: "Todo sobre el extintor Tipo K 1.7 L",
    pageId: "tipo-k-1-7-l",
    faqs: [
      {
        pregunta: "¿Qué clases de fuego apaga el Tipo K 1.7 L?",
        respuesta: "Está certificado para fuegos <strong>K</strong>. Los fuegos de aceites y grasas superan los <strong>360 °C</strong>, donde el polvo seco y el CO₂ no son eficaces. El agente alcalino acuoso del Tipo K <strong>saponifica</strong> (convierte en jabón) la grasa, apagando la llama y formando una capa que evita la re-ignición.",
      },
      {
        pregunta: "¿Es obligatorio el Tipo K en un food truck?",
        respuesta: "Sí. Cualquier vehículo o local con <strong>equipo de cocción con aceites/grasas</strong> requiere extintor Clase K conforme a NFPA 17A y la normativa local (SEDEMA en CDMX). El polvo ABC no sustituye al Tipo K para este riesgo.",
      },
      {
        pregunta: "¿Por qué no sirve un extintor ABC para grasa de cocina?",
        respuesta: "Porque la grasa a alta temperatura <strong>reaviva</strong> tras un extintor ABC o de agua. Solo el agente Tipo K saponifica la grasa y forma una capa que sella el vapor y evita la re-ignición.",
      },
      {
        pregunta: "¿Cada cuánto requiere mantenimiento?",
        respuesta: "Conforme a <strong>NOM-154-SCFI</strong>, requiere mantenimiento anual y prueba hidrostática del cilindro cada 5 años. Ofrecemos pólizas de mantenimiento preventivo en CDMX y Estado de México.",
      },
      {
        pregunta: "¿Puedo recargarlo en CDMX?",
        respuesta: "Sí. Ofrecemos servicio de recarga con verificación, revisión y collar de garantía NOM-154-SCFI. Llámanos al <strong>56 2759 6245</strong> o escríbenos por WhatsApp.",
      }
    ],
  },

  "tipo-k/tipo-k-3-l": {
    seo: {
      title: "Extintor Tipo K 3 Litros — Cocinas Industriales y Restaurantes | Proyecto Red",
      description: "Extintor Tipo K 3 L para aceites y grasas en restaurantes, hoteles y comedores. Obligatorio NFPA 17A y NOM-002-STPS. Descarga tipo niebla fina. Entrega CDMX.",
    },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Extintores", href: "/extintores/" },
      { label: "Tipo K — Cocinas", href: "/extintores/tipo-k/" },
      { label: "Tipo K 3 Litros" },
    ],
    heroStats: [
      { valor: "3 L",       label: "Capacidad" },
      { valor: "Clase K",   label: "Aceites y grasas" },
      { valor: "NFPA 17A", label: "Norma aplicable" },
    ],
    heroBadge: `Clase K · NFPA 17A · Obligatorio en Cocinas`,
    heroTitle: `Extintor Tipo K<br><span class="h1-accent">3 Litros</span>`,
    heroSub: `El extintor Tipo K de 3 litros es el estándar para restaurantes, cafeterías y comedores industriales. Único agente certificado para fuegos clase K en aceites y grasas a alta temperatura. Obligatorio en toda cocina industrial conforme a NFPA 17A y NOM-002-STPS.`,
    waHero: "Hola%2C%20necesito%20cotizar%20el%20extintor%20Tipo%20K%20de%203%20litros%20para%20cocina",
    btnSecundario: { href: "/extintores/tipo-k/", label: "Ver Catálogo Tipo K" },
    heroRight: `<p>El extintor Tipo K actúa por <strong>saponificación</strong>: su agente alcalino reacciona con los ácidos grasos del aceite caliente convirtiéndolos en jabón. Esta reacción química enfría el aceite y forma una barrera que impide la re-ignición de vapores a temperaturas superiores a los 360 °C.</p>
        <p>El polvo seco ABC no puede suprimir permanentemente este tipo de fuego — el calor del aceite re-ignita casi inmediatamente. El Tipo K es el <strong>único agente que resuelve el riesgo de clase K</strong>. Se entrega con soporte de pared, collar de garantía NOM-154-SCFI y documentación completa para expediente de Protección Civil.</p>`,
    mainIntro: `      <div class="pp-gallery">
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/tipo-k.avif?strip=all&lossy=1" alt="Extintor Tipo K 3 litros - Vista frontal certificado NOM-154-SCFI" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/tipo-k/galeria-1.avif?strip=all&lossy=1" alt="Extintor Tipo K 3 litros - Boquilla niebla fina para aceites y grasas" width="400" height="300" loading="eager" />
        </div>
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/tipo-k/galeria-2.avif?strip=all&lossy=1" alt="Extintor Tipo K 3 litros - Instalación en cocina de restaurante México" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/tipo-k/galeria-3.avif?strip=all&lossy=1" alt="Extintor Tipo K 3 litros - Collar de garantía y etiqueta NOM incluidos" width="400" height="300" loading="eager" />
        </div>
      </div>

      <div class="pp-desc">
        <p>El extintor Tipo K de 3 litros contiene una <strong>solución alcalina acuosa</strong> (acetato o citrato de potasio) que reacciona con los ácidos grasos del aceite caliente en una reacción de saponificación. El resultado es la formación de jabón sobre la superficie del aceite — un compuesto inerte, no combustible, que sella los vapores y enfría el aceite por debajo de su punto de auto-ignición.</p>
        <p>La descarga es tipo <strong>niebla fina de baja presión</strong> para evitar salpicado del aceite caliente — lo que podría extender el incendio. Es el extintor obligatorio en toda instalación con equipo de cocción de aceite conforme a <strong>NFPA 17A</strong> y <strong>NOM-002-STPS</strong>.</p>
        <p><strong>Capacidad:</strong> 3 L. <strong>Clase:</strong> K. <strong>Certificación:</strong> NFPA 17A, NOM-154-SCFI, UL 299.</p>
      </div>

      `,
    specs: [
      { label: "Agente extintor",       value: "Solución alcalina acuosa (acetato o citrato de potasio)" },
      { label: "Capacidad nominal",     value: "3 litros" },
      { label: "Clase de fuego",        value: "K — aceites y grasas de cocción a alta temperatura" },
      { label: "Mecanismo de acción",   value: "Saponificación (convierte grasas en jabón) + enfriamiento" },
      { label: "Tiempo de descarga",    value: "~5 segundos" },
      { label: "Tipo de descarga",      value: "Niebla fina de baja presión" },
      { label: "Presión de trabajo",    value: "Baja presión — sin salpicado del aceite caliente" },
      { label: "Gas propelente",        value: "Nitrógeno seco (N₂)" },
      { label: "Temperatura operación", value: "+4 °C a +50 °C" },
      { label: "Boquilla",              value: "Boquilla de niebla fina de alta penetración" },
      { label: "Altura del cilindro",   value: "~50 cm" },
      { label: "Peso total cargado",    value: "~5 kg" },
      { label: "Material cilindro",     value: "Acero inoxidable o aluminio, pintura electrostática plateada/roja" },
      { label: "Montaje",               value: "Soporte de pared — en trayectoria de salida del operador" },
      { label: "Distancia al riesgo",   value: "Máximo 10 metros del equipo de cocción (NFPA 17A)" },
      { label: "Certificación",         value: "NFPA 17A · NOM-154-SCFI · UL 299" },
      { label: "Incluye",               value: "Soporte de pared, etiqueta de inspección, collar de garantía" },
      { label: "Vida útil cilindro",    value: "12 años (prueba hidrostática c/6 años según fabricante)" },
      { label: "Mantenimiento",         value: "Anual NOM-154-SCFI — inspección de pH del agente" },
    ],
    mainResto: `      <section class="pp-block">
        <h2>Características Destacadas</h2>
        <ul class="pp-features">
          <li><strong>Saponificación — mecanismo único para clase K</strong> — La solución alcalina reacciona con los ácidos grasos convirtiéndolos en jabón. Esta reacción química hace que el aceite deje de ser combustible y que la barrera de jabón selle los vapores re-ignitivos permanentemente.</li>
          <li><strong>Niebla fina de baja presión — sin salpicado</strong> — El diseño de la boquilla atomiza el agente en partículas muy finas que caen suavemente sobre el aceite sin perturbarlo. En freidoras industriales una descarga de alta presión podría disparar aceite caliente, extendiendo el fuego.</li>
          <li><strong>Obligatorio en toda cocina industrial — cumplimiento NFPA 17A</strong> — No es una opción ni un extra. La NFPA 17A y NOM-002-STPS lo establecen como requisito en cualquier instalación con freidoras, líneas de cocción o planchas de aceite. Su ausencia genera multas en inspecciones de Protección Civil y STPS.</li>
          <li><strong>Complemento del sistema de protección total</strong> — El Tipo K protege la zona de cocción. Siempre debe acompañarse de un extintor ABC para el resto de la cocina (área de preparación, bodegas, zona de personal) y, en instalaciones mayores, de un sistema automático de supresión en campana.</li>
          <li><strong>Documentación completa para expediente</strong> — Ficha técnica, certificado de conformidad, collar de garantía NOM-154-SCFI y etiqueta de inspección. Todo lo que necesitas para Protección Civil, STPS y certificaciones de calidad como NOM-251-SSA1.</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>¿Dónde es Obligatorio?</h2>
        <ul class="pp-app-list">
          <li>Restaurantes y cafeterías con freidoras o línea de fuego de aceite</li>
          <li>Hoteles con cocina de banquetes y producción intensiva</li>
          <li>Comedores industriales de empresas con más de 50 trabajadores</li>
          <li>Panaderías y repostería industrial con freidoras de donas o rosquillas</li>
          <li>Hospitales y centros de salud con cocina de producción</li>
          <li>Cadenas de comida rápida con freidoras de alto volumen continuo</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>Instalación y Ubicación</h2>
        <p>La <strong>NFPA 17A</strong> establece que el extintor Tipo K debe instalarse a <strong>no más de 10 metros del riesgo</strong> que protege. La posición correcta es en la <strong>trayectoria de salida del operador</strong> — el cocinero debe poder agarrarlo sin cruzar la zona de fuego. Nunca al fondo de la cocina ni detrás del equipo de cocción.</p>
        <p>El soporte de pared debe instalarse a una altura de manija entre 1.0 y 1.5 metros. En cocinas con campana de extracción, se recomienda instalar el extintor visible desde la línea de cocción. El Tipo K se usa junto con el extintor ABC — no en lugar de él.</p>
      </section>

      <section class="pp-block">
        <h2>Cumplimiento Normativo</h2>
        <p>La <strong>NFPA 17A</strong> (Standard for Wet Chemical Extinguishing Systems) es la norma de referencia para agentes húmedos en cocinas industriales. La <strong>NOM-002-STPS</strong> establece los requisitos de extintores en centros de trabajo y considera a las cocinas como zona de riesgo clase K. La <strong>NOM-154-SCFI</strong> regula el mantenimiento anual. La <strong>UL 299</strong> certifica extintores de químico húmedo bajo estándares Underwriters Laboratories. Incluimos toda la documentación para expediente de Protección Civil y STPS.</p>
      </section>

      <section class="pp-block">
        <h2>Resumen de Especificaciones</h2>
        <div class="pp-specs-mini">
          <div class="pp-specs-mini__item"><span>Capacidad</span><span>3 litros</span></div>
          <div class="pp-specs-mini__item"><span>Clase de fuego</span><span>K (aceites y grasas)</span></div>
          <div class="pp-specs-mini__item"><span>Certificación</span><span>NFPA 17A, NOM-154-SCFI</span></div>
          <div class="pp-specs-mini__item"><span>Descarga</span><span>~5 segundos</span></div>
          <div class="pp-specs-mini__item"><span>Categoría</span><span>Extintores Tipo K</span></div>
          <div class="pp-specs-mini__item"><span>Distancia</span><span>Máx. 10 m del riesgo</span></div>
        </div>
      </section>

    `,
    nav: {
      titulo: "Extintores Tipo K",
      ariaLabel: "Capacidades de extintores Tipo K",
      items: [
        { label: "Tipo K 1.7 L — Food truck",     href: "/extintores/tipo-k/" },
        { label: "Tipo K 3 L — Más vendido",       href: "/extintores/tipo-k/tipo-k-3-l/", active: true },
        { label: "Tipo K 6 L — Industrial",        href: "/extintores/tipo-k/" },
      ],
      backHref: "/extintores/tipo-k/",
      backLabel: "← Ver todo el catálogo Tipo K",
    },
    waSidebar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20Tipo%20K%20de%203%20litros",
    caracteristicas: [
      "Saponificación: convierte el aceite caliente en jabón inerte e incombustible",
      "Niebla fina de baja presión — sin riesgo de salpicado del aceite",
      "El único agente certificado para fuegos clase K en cocinas industriales",
      "Collar de garantía NOM-154-SCFI — documentación para Protección Civil",
    ],
    sidebarCerts: { titulo: "Certificaciones Disponibles", html: `<div class="sb__cert"><span class="sb__cert-badge">NFPA</span><span class="sb__cert-name">NFPA 17A</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-154-SCFI</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-002-STPS</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">UL</span><span class="sb__cert-name">UL 299 — Wet Chemical</span></div>` },
    sidebarBrands: { titulo: "Marcas que Manejamos", items: ["Proyecto Red — Marca propia", "Amerex — Tipo K certificado"], note: "Pregunta por otras marcas" },
    aplicaciones: [
      "Restaurantes y cafeterías con equipo de cocción de aceite",
      "Hoteles con cocina de banquetes y producción intensiva",
      "Comedores industriales de plantas con más de 50 trabajadores",
      "Panaderías y repostería industrial con freidoras",
      "Hospitales y centros de salud con cocina propia",
      "Cadenas de comida rápida con freidoras de alto volumen",
    ],
    productos: {
      titulo: "Productos Relacionados",
      relacionados: [
        { nombre: "Tipo K 1.7 L — Food truck",     href: "/extintores/tipo-k/" },
        { nombre: "Tipo K 6 L — Industrial",        href: "/extintores/tipo-k/" },
        { nombre: "PQS 4.5 kg — Área de salón",    href: "/extintores/polvo-seco/" },
        { nombre: "Sistema Ansul para campana",     href: "/sistemas/" },
      ],
      extraHtml: `<li><a href="/extintores/polvo-seco/">Extintores PQS Polvo Seco</a></li>
          <li><a href="/extintores/co2/">Extintores CO₂</a></li>`,
    },
    servicios: { desc: "Complementa tu compra con mantenimiento y capacitación profesional.", linkLabel: "¿Necesitas más servicios? Ver todos →" },
    otros: {
      titulo: "Otros Extintores en Nuestra Línea",
      sub: "Explora más opciones según tu aplicación específica",
      linkHref: "/extintores/tipo-k/",
      linkLabel: "Ver todo el catálogo Tipo K →",
      items: [
        {
          nombre: "Tipo K 1.7 L — Food truck",
          desc: "Para cocinas móviles y freidoras pequeñas independientes. Cumple requerimientos SEDEMA para vehículos con cocción.",
          specs: ["1.7 L", "~3 s", "Clase K"],
          href: "/extintores/tipo-k/",
          img: "https://ewvydcs5uyw.exactdn.com/imagenes/extintores/tipo-k.avif?strip=all&lossy=1",
        },
        {
          nombre: "Tipo K 6 L — Industrial",
          desc: "Para líneas de cocción extensas, freidoras industriales continuas y plantas procesadoras de alimentos.",
          specs: ["6 L", "~8 s", "Alto volumen"],
          href: "/extintores/tipo-k/",
          img: "https://ewvydcs5uyw.exactdn.com/imagenes/extintores/tipo-k.avif?strip=all&lossy=1",
        },
        {
          nombre: "PQS 4.5 kg — Portátil",
          desc: "Complemento clase A·B·C para el área de salón, bodegas y zonas sin riesgo de clase K.",
          specs: ["4.5 kg", "A·B·C", "NOM-154"],
          href: "/extintores/polvo-seco/",
          img: "https://ewvydcs5uyw.exactdn.com/imagenes/extintores/polvo-seco.avif?strip=all&lossy=1",
        },
        {
          nombre: "CO₂ 5 kg — Cuartos eléctricos",
          desc: "Para el cuarto de máquinas y tableros eléctricos de la cocina. Descarga limpia sin daño al equipo.",
          specs: ["5 kg", "B·C", "0 residuo"],
          href: "/extintores/co2/co2-5-kg/",
          img: "https://ewvydcs5uyw.exactdn.com/imagenes/extintores/co2.avif?strip=all&lossy=1",
        },
      ],
      ctaCorto: true,
    },
    cotizarTitulo: "Cotiza Extintor Tipo K 3 Litros",
    cotizarPerks: ["Asesoría técnica sin costo", "Entrega el mismo día en CDMX", "Factura electrónica disponible"],
    waCotizar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20Tipo%20K%203%20litros%20para%20cocina.%20Mi%20nombre%20es%3A",
    faqSubtitulo: "Todo sobre el extintor Tipo K para cocinas industriales",
    pageId: "tipo-k-3-l",
    faqs: [
      {
        pregunta: "¿El extintor Tipo K reemplaza al polvo seco ABC en mi cocina?",
        respuesta: "No. El Tipo K protege <strong>únicamente el riesgo de aceites y grasas</strong> (clase K). En la cocina también hay materiales sólidos (madera, cartón, papel) y equipos eléctricos que requieren un extintor ABC. La <strong>NOM-002-STPS</strong> exige ambos: uno Tipo K en la zona de cocción y uno ABC para el resto del espacio. Te asesoramos sobre la distribución correcta.",
      },
      {
        pregunta: "¿Cuántos extintores Tipo K necesito en mi restaurante?",
        respuesta: "La <strong>NFPA 17A</strong> establece que cada extintor Tipo K debe proteger cualquier equipo de cocción a no más de <strong>10 metros de distancia</strong>. Para una cocina pequeña con una línea de fuego, es suficiente uno de 3 litros. Para cocinas con freidoras múltiples o líneas separadas, el cálculo es por zona. Te hacemos el levantamiento sin costo.",
      },
      {
        pregunta: "¿Por qué el polvo seco no sirve en incendios de aceite de cocina?",
        respuesta: "Los aceites vegetales y grasas animales en freidoras superan los <strong>360 °C</strong> — una temperatura a la que el polvo seco <strong>no puede suprimir los vapores</strong> de forma permanente. El PQS controla momentáneamente la llama pero el aceite sigue generando vapores combustibles que re-ignitan casi inmediatamente. El Tipo K saponifica el aceite (lo convierte en jabón), una reacción química que elimina la fuente del vapor.",
      },
      {
        pregunta: "¿El extintor Tipo K daña el equipo de cocción?",
        respuesta: "El agente alcalino acuoso puede ser <strong>corrosivo en aluminio no anodizado</strong>. Los equipos de <strong>acero inoxidable 304 o 316</strong> no se dañan. Después de usar el extintor es obligatorio limpiar con abundante agua fría y verificar el equipo antes de reiniciar la cocción. Avisamos de esta condición al entregar el extintor.",
      },
      {
        pregunta: "¿Existe sistema automático de supresión para campanas en cocinas?",
        respuesta: "Sí. Los sistemas de supresión automática para campanas — como <strong>Ansul R-102</strong> o Amerex KP — se instalan directamente en la campana de extracción y se activan sin intervención humana al detectar temperatura crítica. Son obligatorios en cocinas con más de <strong>3 freidoras industriales</strong> o más de 500 cubiertos por turno. En Proyecto Red los instalamos e integramos con tu extintor Tipo K portátil.",
      },
      {
        pregunta: "¿Proyecto Red recarga y mantiene extintores Tipo K?",
        respuesta: "Sí. Recargamos y mantenemos extintores Tipo K de cualquier marca. El mantenimiento anual incluye verificación del <strong>pH del agente alcalino</strong> (que puede perder concentración), inspección del sello de seguridad, collar de garantía con reporte para auditorías de STPS y Protección Civil. Podemos coordinar un programa de servicio anual para tu cocina.",
      },
    ],
  },

  "tipo-k/tipo-k-6-l": {
    seo: { title: "Extintor Tipo K 6 L — Clase K para Cocina Industrial y Freidoras Continuas | Proyecto Red", description: "Extintor Tipo K 6 L para cocinas industriales, freidoras continuas y plantas de alimentos. Agente saponificante para aceites y grasas. NFPA 17A · NOM-002-STPS. CDMX." },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Extintores", href: "/extintores/" },
      { label: "Tipo K", href: "/extintores/tipo-k/" },
      { label: "Tipo K 6 L" },
    ],
    heroBadge: `Clase K · Industrial · NFPA 17A`,
    heroTitle: `Extintor Tipo K<br><span class="h1-accent">6 L — Industrial</span>`,
    heroSub: `El extintor Tipo K de 6 L es la mayor capacidad para líneas de cocción extensas, freidoras industriales continuas y plantas de procesamiento de alimentos con alto volumen de aceites y grasas.`,
    waHero: "Hola%2C%20necesito%20cotizar%20el%20extintor%20Tipo%20K%206%20L",
    btnSecundario: { href: "/extintores/tipo-k/", label: "Ver Catálogo" },
    heroRight: `<p>El agente alcalino acuoso <strong>saponifica</strong> los aceites y grasas a alta temperatura (más de 360 °C), apagando la llama y formando una capa que evita la re-ignición — la única acción eficaz para fuegos Clase K.</p><p>La capacidad de 6 L da <strong>mayor tiempo de descarga y penetración</strong> para líneas de cocción extensas y freidoras industriales continuas, donde el volumen de grasa caliente es alto y el riesgo de propagación mayor.</p>`,
    mainIntro: `      <div class="pp-gallery">
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/tipo-k/tipo-k-6l-extintor-cocina-industrial.avif?strip=all&lossy=1" alt="Extintor Tipo K 6 L — Vista frontal" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/tipo-k/galeria-2.avif?strip=all&lossy=1" alt="Extintor Tipo K 6 L — Detalle válvula" width="400" height="300" loading="eager" />
        </div>
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/tipo-k/galeria-3.avif?strip=all&lossy=1" alt="Extintor Tipo K 6 L — Aplicación profesional" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/tipo-k/tipo-k-6l-extintor-cocina-industrial.avif?strip=all&lossy=1" alt="Extintor Tipo K 6 L — Instalación CDMX" width="400" height="300" loading="lazy" />
        </div>
      </div>
      <div class="pp-desc">
        <p>El extintor Tipo K de 6 L es la mayor capacidad de la línea Clase K. Está diseñado para cocinas industriales y líneas de cocción extensas, donde el volumen de aceite caliente exige más agente y mayor penetración de la niebla fina.</p><p>Su boquilla de alta penetración cubre freidoras continuas y campanas extensas. Se entrega con soporte de montaje y documentación para tu expediente de Protección Civil y STPS.</p>
        <p><strong>Capacidad:</strong> 6 L. <strong>Clases:</strong> K. <strong>Agente:</strong> Agente alcalino acuoso (acetato de potasio). <strong>Certificación:</strong> NOM-154-SCFI, NFPA 10.</p>
      </div>
      `,
    specs: [
      { label: "Agente extintor", value: "Agente alcalino acuoso (acetato de potasio)" },
      { label: "Clases de fuego", value: "K" },
      { label: "Capacidad nominal", value: "6 L" },
      { label: "Tiempo de descarga", value: "~8 segundos" },
      { label: "Alcance / descarga", value: "Niebla fina" },
      { label: "Presión de trabajo", value: "Presión protegida" },
      { label: "Altura aprox.", value: "~58 cm" },
      { label: "Diámetro aprox.", value: "~17 cm" },
      { label: "Peso total cargado", value: "~11 kg" },
      { label: "Material", value: "Acero, pintura electrostática roja" },
      { label: "Certificación", value: "NOM-154-SCFI · NFPA 10" },
      { label: "Incluye", value: "Soporte/carretilla según modelo, etiqueta, collar de garantía" },
      { label: "Mantenimiento", value: "Anual obligatorio (NOM-154-SCFI) · Prueba hidrostática c/5 años" }
    ],
    mainResto: `      <section class="pp-block"><h2>Aplicaciones</h2><ul class="pp-app-list">
          <li>Cocinas industriales y comedores de alto volumen</li>
          <li>Freidoras continuas y líneas de cocción</li>
          <li>Plantas de procesamiento de alimentos</li>
          <li>Campanas de cocción extensas</li>
          <li>Hoteles y banqueteras</li>
          <li>Restaurantes de gran capacidad</li>
      </ul></section>
      <section class="pp-block"><h2>Comparativa rápida</h2>
        <table class="pp-table" style="margin-top:0.5rem;"><tbody>
          <tr><td class="pp-table__label">Aceites/grasas (Clase K)</td><td class="pp-table__value">Tipo K: único certificado</td></tr>
          <tr><td class="pp-table__label">Capacidad</td><td class="pp-table__value">6 L: líneas extensas y alto volumen</td></tr>
          <tr><td class="pp-table__label">Penetración</td><td class="pp-table__value">Boquilla de alta penetración</td></tr>
          <tr><td class="pp-table__label">Obligatorio</td><td class="pp-table__value">Cocina industrial — NFPA 17A</td></tr>
        </tbody></table>
      </section>
      <section class="pp-block"><h2>Cumplimiento Normativo</h2>
        <p>Este extintor cumple con la <strong>NOM-154-SCFI</strong> para mantenimiento y recarga y <strong>NFPA 10</strong> como referencia internacional. La <strong>NOM-002-STPS</strong> establece los requerimientos de protección contra incendios en centros de trabajo. Cada unidad se entrega con documentación para tu expediente de Protección Civil.</p>
      </section>
    `,
    waSidebar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20Tipo%20K%206%20L",
    caracteristicas: [
      "Agente alcalino acuoso · 6 litros · ~8 s descarga · Boquilla niebla fina de alta penetración · Soporte de montaje incluido",
      "Certificado NOM-154-SCFI con collar de garantía",
      "Recargable — servicio de recarga en CDMX",
      "Entrega el mismo día en zona metropolitana",
      "Documentación para Protección Civil incluida"
    ],
    aplicaciones: [
      "Cocinas industriales y comedores de alto volumen",
      "Freidoras continuas y líneas de cocción",
      "Plantas de procesamiento de alimentos",
      "Campanas de cocción extensas",
      "Hoteles y banqueteras",
      "Restaurantes de gran capacidad"
    ],
    productos: {
      titulo: "Otros Extintores",
      extraHtml: `<li><a href="/extintores/tipo-k/">Ver todo Extintores Tipo K</a></li>
          <li><a href="/extintores/polvo-seco/">Polvo Seco PQS</a></li>
          <li><a href="/extintores/co2/">CO₂</a></li>
          <li><a href="/extintores/tipo-k/">Tipo K — Cocinas</a></li>
          <li><a href="/extintores/afff/">AFFF — Espuma</a></li>`,
    },
    servicios: { linkLabel: "Ver todos los servicios →" },
    cotizarTitulo: "Cotiza Tipo K 6 L",
    cotizarPerks: ["Asesoría técnica sin costo", "Entrega el mismo día en CDMX", "Factura electrónica disponible"],
    waCotizar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20Tipo%20K%206%20L",
    faqSubtitulo: "Todo sobre el extintor Tipo K 6 L",
    pageId: "tipo-k-6-l",
    faqs: [
      {
        pregunta: "¿Qué clases de fuego apaga el Tipo K 6 L?",
        respuesta: "Está certificado para fuegos <strong>K</strong>. El agente alcalino acuoso <strong>saponifica</strong> los aceites y grasas a alta temperatura (más de 360 °C), apagando la llama y formando una capa que evita la re-ignición — la única acción eficaz para fuegos Clase K.",
      },
      {
        pregunta: "¿Cuándo conviene el 6 L en lugar del 3 L?",
        respuesta: "Cuando la cocina tiene <strong>líneas de cocción extensas, freidoras continuas o alto volumen</strong> de aceite. El 6 L da más tiempo de descarga y penetración. Para un restaurante estándar, el 3 L suele ser suficiente; para industria alimentaria, el 6 L.",
      },
      {
        pregunta: "¿Reemplaza al sistema de supresión de campana?",
        respuesta: "No. El Tipo K es el <strong>extintor portátil</strong> obligatorio; el sistema fijo de supresión de campana es un equipo complementario. Ambos suelen exigirse en cocina industrial. Te asesoramos sobre qué aplica a tu instalación.",
      },
      {
        pregunta: "¿Cada cuánto requiere mantenimiento?",
        respuesta: "Conforme a <strong>NOM-154-SCFI</strong>, requiere mantenimiento anual y prueba hidrostática del cilindro cada 5 años. Ofrecemos pólizas de mantenimiento preventivo en CDMX y Estado de México.",
      },
      {
        pregunta: "¿Puedo recargarlo en CDMX?",
        respuesta: "Sí. Ofrecemos servicio de recarga con verificación, revisión y collar de garantía NOM-154-SCFI. Llámanos al <strong>56 2759 6245</strong> o escríbenos por WhatsApp.",
      }
    ],
  },

  "agente-limpio/agente-limpio-fm200-5-kg": {
    seo: {
      title: "Extintor Agente Limpio FM-200 5 kg — Servidores y Centros de Datos | Proyecto Red",
      description: "Extintor de agente limpio FM-200 5 kg. Sin residuo, sin daño al equipo, seguro para personas. Para centros de datos, servidores y archivos críticos. NOM-154-SCFI. CDMX.",
    },
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Extintores", href: "/extintores/" },
      { label: "Agente Limpio", href: "/extintores/agente-limpio/" },
      { label: "FM-200 5 kg" },
    ],
    heroStats: [
      { valor: "5 kg",    label: "Capacidad" },
      { valor: "A·B·C",  label: "Clases de fuego" },
      { valor: "0 daño",  label: "Al equipo" },
    ],
    heroBadge: `FM-200 · Sin Residuo · Seguro en Personas · NOM-154-SCFI`,
    heroTitle: `Agente Limpio<br><span class="h1-accent">FM-200 5 kg</span>`,
    heroSub: `El extintor de agente limpio FM-200 de 5 kg es el estándar para cuartos de servidores, centros de datos y archivos críticos. Descarga gaseosa que extingue el fuego sin residuo, sin daño al equipo y con concentración de diseño segura para personas.`,
    waHero: "Hola%2C%20necesito%20cotizar%20el%20extintor%20de%20agente%20limpio%20FM-200%205%20kg",
    btnSecundario: { href: "/extintores/agente-limpio/", label: "Ver Catálogo Agente Limpio" },
    heroRight: `<p>El FM-200 (HFC-227ea) actúa absorbiendo el calor de la reacción de combustión a nivel molecular — no por desplazamiento de oxígeno como el CO₂. Se almacena como líquido y se descarga como gas en menos de 10 segundos, sin dejar ningún residuo sólido, líquido ni corrosivo sobre el equipo.</p>
        <p>Es la evolución directa del Halón 1211 (prohibido desde 1994). Supera al CO₂ en seguridad para las personas y actúa en las tres clases de fuego (A, B y C). Cada unidad se entrega con collar de garantía NOM-154-SCFI, etiqueta de inspección y documentación para expediente de Protección Civil y STPS.</p>`,
    mainIntro: `      <div class="pp-gallery">
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/agente-limpio.avif?strip=all&lossy=1" alt="Extintor Agente Limpio FM-200 5 kg - Vista frontal certificado NOM" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/agente-limpio/galeria-1.avif?strip=all&lossy=1" alt="Extintor FM-200 5 kg - Detalle boquilla y manómetro FE-36" width="400" height="300" loading="eager" />
        </div>
        <div class="pp-gallery__col">
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/agente-limpio/galeria-2.avif?strip=all&lossy=1" alt="Extintor FM-200 5 kg - Instalación en cuarto de servidores CDMX" width="400" height="300" loading="eager" />
          <img src="https://ewvydcs5uyw.exactdn.com/imagenes/extintores/agente-limpio/galeria-3.avif?strip=all&lossy=1" alt="Extintor FM-200 5 kg - Placa NOM-154-SCFI y collar de garantía incluido" width="400" height="300" loading="eager" />
        </div>
      </div>

      <div class="pp-desc">
        <p>El FM-200 (HFC-227ea) pertenece a la familia de los <strong>agentes limpios halogenados</strong>. Su mecanismo de extinción es la absorción de calor de la reacción de combustión — no sofoca por desplazamiento de oxígeno. Al descargarse, pasa de estado líquido a gaseoso instantáneamente y cubre la zona del fuego sin dejar rastro.</p>
        <p>A diferencia del CO₂, el FM-200 no desplaza el oxígeno del ambiente y tiene una <strong>concentración de diseño del 7–8.5%</strong> en volumen, considerada segura para personas. Es el agente limpio portátil más utilizado en México para protección de equipos electrónicos críticos.</p>
        <p><strong>Capacidad:</strong> 5 kg. <strong>Clases:</strong> A, B y C. <strong>Certificación:</strong> NOM-154-SCFI, NFPA 2001, UL 2166.</p>
      </div>

      `,
    specs: [
      { label: "Agente extintor",        value: "FM-200 — HFC-227ea (heptafluoropropano)" },
      { label: "Capacidad nominal",      value: "5 kg" },
      { label: "Clases de fuego",        value: "A · B · C" },
      { label: "Mecanismo de acción",    value: "Absorción de calor de reacción (enfriamiento molecular)" },
      { label: "Tiempo de descarga",     value: "~7 segundos" },
      { label: "Alcance de descarga",    value: "1.5–3 metros" },
      { label: "Presión de trabajo",     value: "360–420 PSI (25–29 bar) — nitrógeno como propelente" },
      { label: "Estado en cilindro",     value: "Líquido — se descarga como gas a temperatura ambiente" },
      { label: "Temperatura operación",  value: "-20 °C a +55 °C" },
      { label: "ODP (potencial ozono)",  value: "0 — no daña la capa de ozono" },
      { label: "GWP (potencial calent)", value: "3,220 (menos que el CO₂ en extintores)" },
      { label: "Concentración diseño",   value: "7–8.5% en volumen (segura para personas)" },
      { label: "Boquilla",               value: "Difusor de descarga gaseosa directional" },
      { label: "Altura del cilindro",    value: "~52 cm" },
      { label: "Peso total cargado",     value: "~9 kg" },
      { label: "Material cilindro",      value: "Acero de alta resistencia, pintura electrostática roja" },
      { label: "Verificación de carga",  value: "Pesaje obligatorio (manómetro indicativo solamente)" },
      { label: "Certificación",          value: "NOM-154-SCFI · NFPA 2001 · UL 2166" },
      { label: "Incluye",                value: "Soporte de pared, etiqueta de inspección, collar de garantía" },
      { label: "Vida útil cilindro",     value: "25 años (prueba hidrostática c/5)" },
      { label: "Mantenimiento",          value: "Anual NOM-154-SCFI — pesaje para verificar carga" },
    ],
    mainResto: `      <section class="pp-block">
        <h2>Características Destacadas</h2>
        <ul class="pp-features">
          <li><strong>Cero residuo — reinicio inmediato del equipo</strong> — El FM-200 se descarga como gas y se evapora completamente. No deja polvo, humedad ni compuestos corrosivos. En la mayoría de los casos el equipo puede encenderse inmediatamente sin necesidad de limpieza post-incendio.</li>
          <li><strong>Concentración segura para personas — NFPA 2001</strong> — Con una concentración de diseño del 7–8.5% (por debajo del nivel de efecto fisiológico del 9%), el FM-200 puede usarse en espacios ocasionalmente ocupados. Siempre se recomienda desalojar, pero no genera riesgo inmediato por exposición breve.</li>
          <li><strong>Eficaz en clases A, B y C — incluye fuegos eléctricos</strong> — Actúa sobre materiales sólidos (A), líquidos inflamables (B) y equipos eléctricos activos (C). Puede aplicarse directamente sobre racks de servidores, UPS y tableros energizados sin riesgo de conducción eléctrica ni daño al hardware.</li>
          <li><strong>Sustituto directo del Halón 1211</strong> — El Halón 1211 fue prohibido en México en 1994 por destruir la capa de ozono. El FM-200 ofrece la misma eficacia y rapidez de acción con ODP=0 y sin impacto sobre el ozono estratosférico.</li>
          <li><strong>Documentación completa para expediente</strong> — Ficha técnica, certificado de conformidad NOM-154-SCFI, collar de garantía y etiqueta de inspección. Para expedientes de Protección Civil, STPS y certificaciones de calidad TI como Tier I-IV.</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>Aplicaciones</h2>
        <ul class="pp-app-list">
          <li>Cuartos de servidores y centros de datos Tier I a IV</li>
          <li>Archivos históricos, notariales y acervos documentales irreemplazables</li>
          <li>Museos y galerías con obras de arte originales</li>
          <li>Equipos de telecomunicaciones, racks y fibra óptica</li>
          <li>Laboratorios de alta precisión e instrumentación analítica</li>
          <li>Quirófanos y salas de procedimientos con equipo médico crítico</li>
        </ul>
      </section>

      <section class="pp-block">
        <h2>Instalación y Ubicación</h2>
        <p>El extintor de FM-200 se instala en soporte de pared a <strong>manija entre 1.0 y 1.5 metros</strong> desde el piso. En cuartos de servidores: colocar en la puerta de acceso o junto a la salida de emergencia — accesible antes de entrar al área de fuego. La cobertura efectiva de un extintor de 5 kg es de <strong>1.5 a 3 metros de alcance</strong>.</p>
        <p>Para cuartos mayores de 15 m³, se recomienda complementar con un sistema fijo de supresión total de FM-200 o Novec 1230. Los extintores portátiles son el primer respondedor — los sistemas fijos son la protección completa. Proyecta Red instala ambas soluciones.</p>
      </section>

      <section class="pp-block">
        <h2>Cumplimiento Normativo</h2>
        <p>La <strong>NFPA 2001</strong> (Standard on Clean Agent Fire Extinguishing Systems) es la norma internacional de referencia para el uso de agentes limpios. La <strong>NOM-154-SCFI</strong> regula el mantenimiento anual de extintores portátiles en México. La <strong>UL 2166</strong> certifica extintores de agente limpio bajo estándares Underwriters Laboratories. El <strong>Protocolo de Montreal</strong> establece la prohibición del Halón y la sustitución por agentes con ODP=0 — el FM-200 cumple este requerimiento. Incluimos toda la documentación para Protección Civil, STPS y certificaciones TI.</p>
      </section>

      <section class="pp-block">
        <h2>Resumen de Especificaciones</h2>
        <div class="pp-specs-mini">
          <div class="pp-specs-mini__item"><span>Capacidad</span><span>5 kg FM-200</span></div>
          <div class="pp-specs-mini__item"><span>Clases de fuego</span><span>A · B · C</span></div>
          <div class="pp-specs-mini__item"><span>Certificación</span><span>NOM-154-SCFI, NFPA 2001</span></div>
          <div class="pp-specs-mini__item"><span>Descarga</span><span>~7 segundos</span></div>
          <div class="pp-specs-mini__item"><span>Residuo</span><span>Cero — equipo reinicia</span></div>
          <div class="pp-specs-mini__item"><span>Seguro personas</span><span>Sí — conc. 7–8.5%</span></div>
        </div>
      </section>

    `,
    nav: {
      titulo: "Agentes Limpios",
      ariaLabel: "Tipos de agente limpio",
      items: [
        { label: "FM-200 2.5 kg — Compacto",  href: "/extintores/agente-limpio/" },
        { label: "FM-200 5 kg — Servidores",  href: "/extintores/agente-limpio/agente-limpio-fm200-5-kg/", active: true },
        { label: "FM-200 10 kg — Data center", href: "/extintores/agente-limpio/" },
        { label: "FE-36 5 kg — Bajo impacto",  href: "/extintores/agente-limpio/" },
      ],
      backHref: "/extintores/agente-limpio/",
      backLabel: "← Ver catálogo Agente Limpio",
    },
    waSidebar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20FM-200%205%20kg",
    caracteristicas: [
      "Cero residuo — el equipo puede operar inmediatamente después de la descarga",
      "Seguro para personas en espacios ocupados — concentración de diseño 7–8.5%",
      "Eficaz en clases A, B y C — actúa sobre equipos eléctricos activos sin daño",
      "Collar de garantía NOM-154-SCFI con fecha de próximo servicio",
    ],
    sidebarCerts: { titulo: "Certificaciones Disponibles", html: `<div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-154-SCFI</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NFPA</span><span class="sb__cert-name">NFPA 2001</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">UL</span><span class="sb__cert-name">UL 2166 — Clean Agent</span></div>
          <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-002-STPS</span></div>` },
    sidebarBrands: { titulo: "Marcas que Manejamos", items: ["Proyecto Red — Marca propia", "Amerex — FM-200 certificado"], note: "Pregunta por Novec 1230" },
    aplicaciones: [
      "Cuartos de servidores y centros de datos",
      "Archivos históricos, notariales y acervos documentales",
      "Museos y galerías con obras de arte originales",
      "Equipos de telecomunicaciones y racks de fibra óptica",
      "Laboratorios de alta precisión e instrumentación analítica",
      "Quirófanos y salas de procedimientos con equipo crítico",
    ],
    productos: {
      titulo: "Productos Relacionados",
      relacionados: [
        { nombre: "FM-200 2.5 kg — Compacto",    href: "/extintores/agente-limpio/" },
        { nombre: "FM-200 10 kg — Data center",  href: "/extintores/agente-limpio/" },
        { nombre: "FE-36 5 kg — Bajo impacto",   href: "/extintores/agente-limpio/" },
        { nombre: "CO₂ 5 kg — Complemento",      href: "/extintores/co2/co2-5-kg/" },
      ],
      extraHtml: `<li><a href="/extintores/polvo-seco/">Extintores PQS Polvo Seco</a></li>
          <li><a href="/sistemas/">Sistemas Fijos de Supresión</a></li>`,
    },
    servicios: { desc: "Complementa con sistemas fijos y mantenimiento profesional.", linkLabel: "¿Necesitas más servicios? Ver todos →" },
    otros: {
      titulo: "Otros Extintores en Nuestra Línea",
      sub: "Explora más opciones según tu aplicación específica",
      linkHref: "/extintores/agente-limpio/",
      linkLabel: "Ver todo el catálogo Agente Limpio →",
      items: [
        {
          nombre: "FM-200 2.5 kg — Compacto",
          desc: "Para equipos críticos en espacios pequeños: PCs, mini-racks y equipamiento de valor moderado.",
          specs: ["2.5 kg", "~5 s", "0 residuo"],
          href: "/extintores/agente-limpio/",
          img: "https://ewvydcs5uyw.exactdn.com/imagenes/extintores/agente-limpio.avif?strip=all&lossy=1",
        },
        {
          nombre: "FM-200 10 kg — Data center",
          desc: "Para cuartos de servidores medianos y salas de telecomunicaciones. Máxima cobertura portátil.",
          specs: ["10 kg", "~12 s", "NFPA 2001"],
          href: "/extintores/agente-limpio/",
          img: "https://ewvydcs5uyw.exactdn.com/imagenes/extintores/agente-limpio.avif?strip=all&lossy=1",
        },
        {
          nombre: "FE-36 5 kg — Bajo impacto",
          desc: "Alternativa con ODP=0 para instalaciones con restricciones ambientales estrictas. Funcionalidad idéntica a FM-200.",
          specs: ["5 kg", "ODP=0", "FE-36"],
          href: "/extintores/agente-limpio/",
          img: "https://ewvydcs5uyw.exactdn.com/imagenes/extintores/agente-limpio.avif?strip=all&lossy=1",
        },
        {
          nombre: "CO₂ 5 kg — Complemento",
          desc: "Alternativa más económica para cuartos eléctricos. Sin residuo pero con restricciones en espacios pequeños.",
          specs: ["5 kg", "B·C", "0 residuo"],
          href: "/extintores/co2/co2-5-kg/",
          img: "https://ewvydcs5uyw.exactdn.com/imagenes/extintores/co2.avif?strip=all&lossy=1",
        },
      ],
      ctaCorto: true,
    },
    cotizarTitulo: "Cotiza Extintor FM-200 5 kg",
    cotizarPerks: ["Asesoría técnica sin costo", "Entrega el mismo día en CDMX", "Factura electrónica disponible"],
    waCotizar: "Hola%2C%20necesito%20cotizar%20el%20extintor%20FM-200%205%20kg.%20Mi%20nombre%20es%3A",
    faqSubtitulo: "Todo sobre el extintor de agente limpio FM-200 5 kg",
    pageId: "agente-limpio-fm200-5-kg",
    faqs: [
      {
        pregunta: "¿Qué diferencia hay entre FM-200 y CO₂ para proteger servidores?",
        respuesta: "Ambos son agentes limpios sin residuo, pero hay diferencias importantes: el <strong>FM-200 es más seguro para las personas</strong> en espacios confinados (concentración de diseño del 7–8.5% vs el CO₂ que desplaza el oxígeno). El FM-200 actúa sobre fuegos clase A, B y C, mientras el CO₂ es limitado en clase A. El <strong>FM-200 es más costoso</strong> pero es el estándar recomendado por NFPA 2001 para cuartos de servidores con presencia de personal.",
      },
      {
        pregunta: "¿El FM-200 daña los equipos electrónicos?",
        respuesta: "No. El FM-200 se descarga como gas sin residuo sólido, líquido ni corrosivo. No afecta circuitos, discos duros, unidades ópticas, conectores ni componentes electrónicos de ningún tipo. En la mayoría de los casos, el equipo puede <strong>reiniciarse inmediatamente</strong> después de la descarga sin necesidad de limpieza.",
      },
      {
        pregunta: "¿El FM-200 es peligroso para las personas?",
        respuesta: "En la concentración de diseño del 7–8.5%, el FM-200 es considerado <strong>seguro para exposición breve</strong>. Sin embargo, el protocolo correcto siempre es desalojar antes de la descarga o inmediatamente después. A concentraciones muy superiores al diseño puede generar efectos cardíacos. En ningún caso debe permanecer en el espacio durante varios minutos después de la descarga.",
      },
      {
        pregunta: "¿Cuál es la diferencia entre FM-200 y Novec 1230?",
        respuesta: "Ambos son agentes limpios eficaces, pero el <strong>Novec 1230</strong> tiene un potencial de calentamiento global (GWP) de solo 1 vs 3,220 del FM-200. El Novec es la opción para instalaciones con compromisos de sustentabilidad extrema o certificaciones como LEED o ISO 14064. El <strong>FM-200 es más económico</strong> y más disponible en extintores portátiles. Para sistemas fijos en data centers grandes, el Novec es la tendencia actual.",
      },
      {
        pregunta: "¿Se puede usar el FM-200 en una cocina industrial?",
        respuesta: "No. El FM-200 no es eficaz contra fuegos clase K (aceites y grasas de cocción a alta temperatura). El calor del aceite es tan intenso que supera la capacidad de absorción del agente. Para cocinas industriales, el extintor correcto es el <strong>Tipo K</strong> con solución alcalina. El FM-200 es el agente para TI, archivos y laboratorios — no para áreas de cocción.",
      },
      {
        pregunta: "¿Proyecto Red instala sistemas fijos de agente limpio?",
        respuesta: "Sí. Además de los extintores portátiles de FM-200, instalamos <strong>sistemas fijos de supresión total</strong> con FM-200 y Novec 1230 para cuartos de servidores, data centers y archivos críticos. Los sistemas fijos se activan automáticamente y están integrados con la alarma contra incendio. Incluimos diseño, instalación, comisionamiento y mantenimiento del sistema.",
      },
    ],
  },

};
