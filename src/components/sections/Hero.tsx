import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary"
    >
      {/* Imagen de fondo */}
      <Image
        src="/hero/hero-obra.webp"
        alt=""
        fill
        className="object-cover object-center"
        priority
        aria-hidden="true"
      />
      {/* Overlay corporativo — sutil para que la foto respire */}
      <div className="absolute inset-0 bg-brand-primary/70" />

      {/* Acento geométrico derecho */}
      <div
        className="absolute right-0 top-0 h-full w-1/2 hidden lg:block pointer-events-none"
        aria-hidden
      >
        <div className="absolute right-[15%] top-1/4 w-px h-1/2 bg-brand-accent/20" />
        <div className="absolute right-[30%] top-1/3 w-px h-1/3 bg-brand-accent/10" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border-l border-t border-brand-accent/10" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-5 xl:px-10 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <p className="text-brand-muted text-xs tracking-[0.3em] uppercase font-normal mb-8">
            San Carlos Centro · Santa Fe · Argentina
          </p>

          {/* Título principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-light leading-[1.1] tracking-tight mb-8">
            Ingeniería eléctrica<br />
            y automatización<br />
            <span className="font-medium text-brand-accent">para la industria</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12">
            Soluciones integrales en ingeniería, montaje eléctrico industrial
            y sistemas de automatización.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-white text-brand-primary font-medium text-sm px-8 py-4 rounded-sm hover:bg-brand-bg transition-colors tracking-wide"
            >
              Solicitar cotización
            </a>
            <a
              href="#obras"
              className="inline-flex items-center gap-2 border border-white/25 text-white font-normal text-sm px-8 py-4 rounded-sm hover:border-white/50 hover:bg-white/5 transition-all tracking-wide"
            >
              Ver proyectos
              <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Métricas */}
          <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap gap-10">
            {[
              { value: "+15", label: "Años de trayectoria" },
              { value: "+200", label: "Proyectos ejecutados" },
              { value: "+50", label: "Clientes industriales" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-medium text-white tracking-tight">
                  {stat.value}
                </p>
                <p className="text-white/40 text-xs font-normal tracking-wide mt-1 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
