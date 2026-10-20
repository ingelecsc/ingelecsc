"use client";
import { useState, FormEvent } from "react";

const benefits = [
  { title: "Proyectos de alta complejidad", text: "Trabajás en instalaciones industriales reales, con tecnología de primer nivel y clientes exigentes." },
  { title: "Equipo técnico de calidad",     text: "Ambiente profesional con ingenieros y técnicos de amplia experiencia en el sector eléctrico." },
  { title: "Capacitación continua",          text: "Acceso a formación en plataformas líderes: Siemens, Allen-Bradley, Schneider y más." },
  { title: "Estabilidad y crecimiento",      text: "Empresa consolidada con cartera de clientes industriales de largo plazo en la región." },
];

const positions = [
  "Técnico electricista matriculado",
  "Ingeniero eléctrico / electrónico",
  "Programador PLC / SCADA",
  "Instrumentista industrial",
  "Proyectista CAD eléctrico",
  "CV general – otro perfil",
];

type Status = "idle" | "loading" | "success" | "error";

export default function WorkWithUs() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "job_application" }),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="trabaja" className="py-20 md:py-28 bg-white dark:bg-brand-primary/10">
      <div className="container mx-auto px-5 xl:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Izquierda */}
          <div>
            <p className="text-brand-accent text-xs tracking-[0.25em] uppercase font-normal mb-3">
              Empleos
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-brand-text dark:text-white leading-tight heading-accent mb-6">
              Trabajá con nosotros
            </h2>
            <p className="text-brand-text/55 dark:text-white/45 font-light leading-relaxed mb-10 text-base">
              Buscamos profesionales apasionados por la ingeniería eléctrica
              e industrial para sumarse a proyectos desafiantes en Santa Fe y la región.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((b) => (
                <div key={b.title}
                  className="p-5 rounded border border-brand-light dark:border-brand-primary/30 bg-brand-bg dark:bg-brand-primary/20">
                  <p className="text-sm font-medium text-brand-text dark:text-white mb-1 tracking-tight">{b.title}</p>
                  <p className="text-xs text-brand-text/50 dark:text-white/35 font-light leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded border border-brand-accent/20 bg-brand-primary/5 dark:bg-brand-primary/30">
              <p className="text-[10px] text-brand-accent font-medium tracking-[0.2em] uppercase mb-3">
                Perfiles buscados
              </p>
              <ul className="space-y-1.5">
                {positions.slice(0, -1).map((p) => (
                  <li key={p} className="flex items-center gap-2 text-xs text-brand-text/55 dark:text-white/40 font-light">
                    <span className="w-1 h-1 rounded-full bg-brand-accent shrink-0"/>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white dark:bg-brand-primary/20 rounded border border-brand-light dark:border-brand-primary/30 p-8">
            {status === "success" ? (
              <div className="text-center py-14">
                <div className="w-14 h-14 rounded-full border border-brand-accent/30 text-brand-accent flex items-center justify-center mx-auto mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-brand-text dark:text-white mb-2">Postulación recibida</h4>
                <p className="text-brand-text/45 dark:text-white/35 text-sm font-light">
                  Revisaremos tu perfil y te contactaremos si hay una oportunidad.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-base font-medium text-brand-text dark:text-white tracking-tight mb-5">
                  Enviar postulación
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-normal text-brand-text/40 dark:text-white/30 uppercase tracking-widest mb-1.5">Nombre completo *</label>
                    <input type="text" name="name" required
                      className="w-full px-4 py-3 rounded border border-brand-light dark:border-brand-primary/40 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 outline-none text-sm font-light text-brand-text dark:text-white bg-white dark:bg-brand-primary/30 transition-all"/>
                  </div>
                  <div>
                    <label className="block text-[10px] font-normal text-brand-text/40 dark:text-white/30 uppercase tracking-widest mb-1.5">Teléfono *</label>
                    <input type="tel" name="phone" required
                      className="w-full px-4 py-3 rounded border border-brand-light dark:border-brand-primary/40 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 outline-none text-sm font-light text-brand-text dark:text-white bg-white dark:bg-brand-primary/30 transition-all"/>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-normal text-brand-text/40 dark:text-white/30 uppercase tracking-widest mb-1.5">Email *</label>
                  <input type="email" name="email" required
                    className="w-full px-4 py-3 rounded border border-brand-light dark:border-brand-primary/40 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 outline-none text-sm font-light text-brand-text dark:text-white bg-white dark:bg-brand-primary/30 transition-all"/>
                </div>

                <div>
                  <label className="block text-[10px] font-normal text-brand-text/40 dark:text-white/30 uppercase tracking-widest mb-1.5">Perfil *</label>
                  <select name="position" required defaultValue=""
                    className="w-full px-4 py-3 rounded border border-brand-light dark:border-brand-primary/40 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 outline-none text-sm font-light text-brand-text dark:text-white bg-white dark:bg-brand-primary/30 transition-all">
                    <option value="" disabled>Seleccioná...</option>
                    {positions.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-normal text-brand-text/40 dark:text-white/30 uppercase tracking-widest mb-1.5">Experiencia y motivación</label>
                  <textarea name="message" rows={4}
                    placeholder="Contanos brevemente tu experiencia..."
                    className="w-full px-4 py-3 rounded border border-brand-light dark:border-brand-primary/40 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 outline-none text-sm font-light text-brand-text dark:text-white placeholder-brand-text/25 dark:placeholder-white/20 bg-white dark:bg-brand-primary/30 resize-none transition-all"/>
                </div>

                <div>
                  <label className="block text-[10px] font-normal text-brand-text/40 dark:text-white/30 uppercase tracking-widest mb-1.5">Link CV (Drive / Dropbox)</label>
                  <input type="url" name="cv_link" placeholder="https://drive.google.com/..."
                    className="w-full px-4 py-3 rounded border border-brand-light dark:border-brand-primary/40 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 outline-none text-sm font-light text-brand-text dark:text-white placeholder-brand-text/25 dark:placeholder-white/20 bg-white dark:bg-brand-primary/30 transition-all"/>
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm font-light">Error al enviar. Intentá de nuevo.</p>
                )}

                <button type="submit" disabled={status === "loading"}
                  className="w-full py-3.5 bg-brand-secondary hover:bg-brand-accent text-white text-sm font-normal tracking-wide rounded transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2">
                  {status === "loading" ? (
                    <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>Enviando...</>
                  ) : "Enviar postulación"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
