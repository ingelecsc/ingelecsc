export default function InstagramFeed() {
  return (
    <section className="py-20 md:py-28 bg-brand-primary">
      <div className="container mx-auto px-5 xl:px-10">
        <div className="max-w-lg mx-auto text-center">

          {/* Ícono Instagram */}
          <div className="w-11 h-11 mx-auto mb-8 flex items-center justify-center rounded-xl bg-white/8 text-white/50">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </div>

          <p className="text-brand-muted text-xs tracking-[0.3em] uppercase font-normal mb-5">
            @ingelec.argentina
          </p>

          <h2 className="text-2xl md:text-3xl font-light text-white leading-tight mb-6">
            Seguí nuestros proyectos<br />en Instagram
          </h2>

          <p className="text-white/40 text-sm font-light leading-relaxed mb-10">
            Publicamos obras, tableros, montajes y el trabajo de nuestro equipo.
          </p>

          <a
            href="https://www.instagram.com/ingelec.argentina/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-brand-primary font-medium text-sm px-8 py-4 rounded-sm hover:bg-brand-bg transition-colors tracking-wide group"
          >
            Ver todos los proyectos
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
