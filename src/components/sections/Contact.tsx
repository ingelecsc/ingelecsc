"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const contactInfo = [
  {
    label: "Email principal",
    value: "info@ingelecsc.com",
    href: "mailto:info@ingelecsc.com",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Alexis Perrig",
    value: "alexis.perrig@ingelecsc.com",
    href: "mailto:alexis.perrig@ingelecsc.com",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    label: "Fernando Fillia",
    value: "fernando.fillia@ingelecsc.com",
    href: "mailto:fernando.fillia@ingelecsc.com",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+54 9 3496 418221",
    href: "https://wa.me/5493496418221?text=Hola%20INGELEC%2C%20quisiera%20consultar%20sobre%20sus%20servicios.",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
                  Te respondemos a la brevedad. También podés escribirnos por WhatsApp.
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
