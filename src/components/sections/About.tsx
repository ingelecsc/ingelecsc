const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Calidad certificada",
    text: "Cumplimos normativas nacionales e internacionales en cada proyecto. Personal matriculado y habilitado ante los entes reguladores provinciales.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Equipo técnico propio",
    text: "Ingenieros eléctricos, electrónicos y técnicos especialistas en automatización con vasta experiencia en proyectos de gran envergadura.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Tecnología de vanguardia",
    text: "Trabajamos con plataformas líderes: Siemens TIA Portal, Rockwell Studio 5000, Schneider EcoStruxure, SCADA Ignition y WinCC.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Cumplimiento y trazabilidad",
    text: "Documentación técnica completa: planos as-built, manuales, protocolos de prueba y certificados de puesta en marcha entregados en cada proyecto.",
  },
];

const timeline = [
  { year: "Origen", text: "Fundación de INGELEC San Carlos SRL en San Carlos Centro, Santa Fe, Argentina, con foco en el sector industrial de la región del litoral santafesino." },
  { year: "Crecimiento", text: "Incorporación de servicios de automatización y programación PLC, consolidando la presencia en la industria alimenticia y química." },
  { year: "Expansión", text: "Desarrollo de proyectos de gran escala para empresas líderes como Royal Canin, Milkaut–Savencia, PB Leiner y SADESA." },
  { year: "Hoy", text: "Más de 200 proyectos ejecutados, con un equipo técnico multidisciplinario que interviene en todo el ciclo del proyecto eléctrico industrial." },
];

export default function About() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-brand-primary">
      <div className="container mx-auto px-5 xl:px-10">

        {/* Encabezado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-16">
          <div>
            <p className="text-brand-accent text-xs tracking-[0.25em] uppercase font-normal mb-3">
              Nosotros
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-white leading-tight heading-accent">
              Una empresa de ingeniería<br className="hidden md:block" />
              con presencia real en la industria
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-white/50 font-light leading-relaxed text-base">
              INGELEC San Carlos SRL es una empresa argentina especializada en ingeniería eléctrica e
              industrial. Con sede en San Carlos Centro, Santa Fe, nos consolidamos como referentes
              en soluciones eléctricas para el sector productivo de la región pampeana y el interior del país.
            </p>
          </div>
        </div>

        {/* Historia / Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-secondary/30 border border-brand-secondary/30 rounded mb-16 overflow-hidden">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="bg-brand-primary p-7 hover:bg-brand-secondary/20 transition-colors"
            >
              <p className="text-brand-accent text-xs font-medium tracking-[0.2em] uppercase mb-3">
                {item.year}
              </p>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group p-6 rounded border border-brand-secondary/30 hover:border-brand-accent/40 hover:bg-brand-secondary/10 transition-all duration-300"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded border border-brand-secondary/40 text-brand-accent mb-5 group-hover:border-brand-accent/60 transition-colors">
                {p.icon}
              </div>
              <h3 className="text-white text-sm font-medium mb-2 tracking-tight">
                {p.title}
              </h3>
              <p className="text-white/45 text-xs font-light leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        {/* Habilitaciones */}
        <div className="mt-12 p-7 rounded border border-brand-secondary/30 bg-brand-secondary/10">
          <div className="flex flex-wrap gap-x-10 gap-y-4 items-center">
            <p className="text-brand-accent text-xs font-medium tracking-[0.2em] uppercase whitespace-nowrap">
              Habilitaciones
            </p>
            {[
              "Personal matriculado ante organismos provinciales",
              "Seguros de Responsabilidad Civil y ART vigentes",
              "Cumplimiento IRAM / IEC / NEC",
              "Capacidad como contratista para grandes industrias",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-brand-accent shrink-0" />
                <span className="text-white/50 text-xs font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
