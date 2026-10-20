const services = [
  {
    id: "01",
    title: "Ingeniería eléctrica",
    description:
      "Proyecto, cálculo y documentación de instalaciones eléctricas industriales. Memorias descriptivas, planos unifilares y planillas de cargas conforme normativa IRAM / IEC.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Montaje eléctrico industrial",
    description:
      "Ejecución de instalaciones en plantas industriales: acometidas, distribución BT/MT, canalizaciones, bandejas portacables, iluminación y sistemas de puesta a tierra.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Automatización industrial",
    description:
      "Diseño e integración de sistemas de control automático: sensores, actuadores, variadores de frecuencia y redes industriales (Profibus, Profinet, Modbus, EtherNet/IP).",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Tableros eléctricos",
    description:
      "Fabricación de tableros de potencia, comando y distribución a medida. Programación PLC (Siemens, Allen-Bradley, Schneider), HMI y sistemas SCADA para supervisión en planta.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Instalaciones de potencia",
    description:
      "Ejecución de instalaciones en media y baja tensión: subestaciones transformadoras, celdas de MT, tableros generales de BT y sistemas de protección y medida.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "06",
    title: "Servicios técnicos",
    description:
      "Mantenimiento preventivo y correctivo, instrumentación industrial, puesta en marcha, medición de PAT según SRT900/15 con instrumentos certificados, megado de cables y motores y servicios de guardia para instalaciones en operación.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-brand-bg dark:bg-[#1A0020]">
      <div className="container mx-auto px-5 xl:px-10">

        {/* Encabezado */}
        <div className="mb-14">
          <p className="text-brand-accent text-xs tracking-[0.25em] uppercase font-normal mb-3">
            Lo que hacemos
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-brand-text dark:text-white leading-tight heading-accent">
            Servicios
          </h2>
          <p className="mt-6 text-base text-brand-text/60 dark:text-white/50 max-w-xl font-light leading-relaxed">
            Abarcamos el ciclo completo del proyecto: desde la ingeniería conceptual
            hasta la puesta en marcha y el mantenimiento continuo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-light dark:bg-brand-primary/30 border border-brand-light dark:border-brand-primary/30 rounded overflow-hidden">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white dark:bg-[#2D003A] p-8 hover:bg-brand-primary/5 dark:hover:bg-brand-secondary/30 transition-colors duration-300"
            >
              {/* Número */}
              <span className="text-xs font-medium text-brand-accent/50 tracking-[0.15em] block mb-5">
                {service.id}
              </span>

              {/* Ícono */}
              <div className="text-brand-accent mb-4">
                {service.icon}
              </div>

              {/* Título */}
              <h3 className="text-base font-medium text-brand-text dark:text-white mb-3 tracking-tight">
                {service.title}
              </h3>

              {/* Descripción */}
              <p className="text-sm text-brand-text/55 dark:text-white/45 font-light leading-relaxed">
                {service.description}
              </p>

              {/* Línea inferior decorativa */}
              <div className="mt-6 h-px w-0 group-hover:w-full bg-brand-accent/40 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium tracking-wide border-b border-brand-accent/40 pb-px hover:border-brand-accent transition-colors"
          >
            Consultá por tu proyecto
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
