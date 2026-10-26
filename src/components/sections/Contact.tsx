"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const contactInfo = [
  {
    label: "Email",
    value: "info@ingelecsc.com",
    href: "mailto:info@ingelecsc.com",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Ubicación",
    value: "San Carlos Centro · Santa Fe · Argentina",
    href: null,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const subjects = [
  "Ingeniería eléctrica",
  "Montaje eléctrico industrial",
  "Automatización industrial",
  "Tableros eléctricos",
  "Instalaciones de potencia",
  "Servicios técnicos",
  "Otro",
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        router.push("/gracias");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-brand-bg dark:bg-[#1A0020]">
      <div className="container mx-auto px-5 xl:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Info */}
          <div>
            <p className="text-brand-accent text-xs tracking-[0.25em] uppercase font-normal mb-3">
              Contacto
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-brand-text dark:text-white leading-tight heading-accent mb-8">
              Hablemos de tu proyecto
            </h2>
            <p className="text-brand-text/55 dark:text-white/45 font-light leading-relaxed mb-10 text-base">
              Contanos sobre tu necesidad y te respondemos a la brevedad con una
              propuesta técnica y económica.
            </p>

            <div className="space-y-3">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 p-4 rounded border border-brand-light dark:border-brand-primary/30 bg-white dark:bg-brand-primary/20 hover:border-brand-accent/30 transition-colors"
                >
                  <div className="w-9 h-9 rounded flex items-center justify-center bg-brand-primary/8 dark:bg-brand-accent/10 text-brand-accent shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-brand-text/35 dark:text-white/25 font-normal tracking-widest uppercase mb-0.5">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm text-brand-text dark:text-white font-normal hover:text-brand-accent dark:hover:text-brand-accent transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-brand-text dark:text-white font-normal">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Horario */}
            <div className="mt-6 p-5 rounded border border-brand-light dark:border-brand-primary/30 bg-white dark:bg-brand-primary/20">
              <p className="text-[10px] text-brand-text/35 dark:text-white/25 font-normal tracking-widest uppercase mb-4">
                Atención
              </p>
              <div className="space-y-2 text-sm font-light">
                <div className="flex justify-between text-brand-text/60 dark:text-white/40">
                  <span>Lunes – Viernes</span>
                  <span className="font-normal text-brand-text dark:text-white">07:00 – 16:00</span>
                </div>
                <div className="flex justify-between text-brand-accent">
                  <span>Urgencias industriales</span>
                  <span className="font-medium">24 / 7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white dark:bg-brand-primary/20 rounded border border-brand-light dark:border-brand-primary/30 p-8">
            {status === "success" ? (
              <div className="text-center py-14">
                <div className="w-14 h-14 rounded-full border border-brand-accent/30 text-brand-accent flex items-center justify-center mx-auto mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-medium text-brand-text dark:text-white mb-2 tracking-tight">
                  Mensaje recibido
                </h4>
                <p className="text-brand-text/50 dark:text-white/40 text-sm font-light mb-6">
                  Te respondemos a la brevedad a tu email.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-brand-accent text-sm font-normal border-b border-brand-accent/40 pb-px hover:border-brand-accent transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-base font-medium text-brand-text dark:text-white tracking-tight mb-5">
                  Solicitar cotización
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "name",    label: "Nombre",  placeholder: "Juan García",       type: "text",  required: true },
                    { name: "company", label: "Empresa", placeholder: "Mi Empresa SRL",    type: "text",  required: false },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-[10px] font-normal text-brand-text/40 dark:text-white/30 uppercase tracking-widest mb-1.5">
                        {field.label}{field.required && " *"}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 rounded border border-brand-light dark:border-brand-primary/40 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 outline-none transition-all text-brand-text dark:text-white placeholder-brand-text/25 dark:placeholder-white/20 text-sm font-light bg-white dark:bg-brand-primary/30"
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-normal text-brand-text/40 dark:text-white/30 uppercase tracking-widest mb-1.5">Email *</label>
                    <input type="email" name="email" required placeholder="juan@empresa.com"
                      className="w-full px-4 py-3 rounded border border-brand-light dark:border-brand-primary/40 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 outline-none transition-all text-brand-text dark:text-white placeholder-brand-text/25 dark:placeholder-white/20 text-sm font-light bg-white dark:bg-brand-primary/30" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-normal text-brand-text/40 dark:text-white/30 uppercase tracking-widest mb-1.5">Teléfono</label>
                    <input type="tel" name="phone" placeholder="+54 9 …"
                      className="w-full px-4 py-3 rounded border border-brand-light dark:border-brand-primary/40 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 outline-none transition-all text-brand-text dark:text-white placeholder-brand-text/25 dark:placeholder-white/20 text-sm font-light bg-white dark:bg-brand-primary/30" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-normal text-brand-text/40 dark:text-white/30 uppercase tracking-widest mb-1.5">Servicio *</label>
                  <select name="subject" required defaultValue=""
                    className="w-full px-4 py-3 rounded border border-brand-light dark:border-brand-primary/40 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 outline-none transition-all text-brand-text dark:text-white text-sm font-light bg-white dark:bg-brand-primary/30">
                    <option value="" disabled>Seleccioná...</option>
                    {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-normal text-brand-text/40 dark:text-white/30 uppercase tracking-widest mb-1.5">Mensaje *</label>
                  <textarea name="message" required rows={4}
                    placeholder="Describí brevemente tu proyecto o consulta..."
                    className="w-full px-4 py-3 rounded border border-brand-light dark:border-brand-primary/40 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 outline-none transition-all text-brand-text dark:text-white placeholder-brand-text/25 dark:placeholder-white/20 text-sm font-light bg-white dark:bg-brand-primary/30 resize-none" />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm font-light">
                    Error al enviar. Escribinos directamente a info@ingelecsc.com
                  </p>
                )}

                <button type="submit" disabled={status === "loading"}
                  className="w-full py-3.5 bg-brand-primary hover:bg-brand-secondary dark:hover:bg-brand-secondary text-white text-sm font-normal tracking-wide rounded transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2">
                  {status === "loading" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Enviando...
                    </>
                  ) : "Enviar consulta"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
