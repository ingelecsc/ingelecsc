"use client";
import { useState } from "react";
import Image from "next/image";

/*
 * Activación automática: copiar proyecto-XX.webp a public/proyectos/
 *   onLoad  → card completa con foto
 *   onError → card compacta "Caso destacado"
 *
 * Orden de display (intercalado foto / compacta por fila):
 *   Fila 1 → 01 SADESA (foto)    · 02 Royal Canin  (pendiente)
 *   Fila 2 → 03 Milkaut (foto)   · 05 Molfino      (pendiente)
 *   Fila 3 → 04 PB Leiner (foto) · 06 FIMACO       (pendiente)
 *
 * Mobile: cards con foto primero, compactas al final (order-last md:order-none).
 */
const projects = [
  {
    id: "proyecto-01",
    cliente: "PB Leiner",
    industria: "Ingredientes",
    servicio: "Automatización industrial · PLC Schneider",
    tag: "PLC M340",
    description:
      "Nuevo tablero de PLC línea M340 de Schneider Electric. Ingeniería, programación y puesta en marcha en planta de gelatina.",
  },
  {
    id: "proyecto-02",
    cliente: "Royal Canin",
    industria: "Alimentos",
    servicio: "Obra eléctrica · Instalaciones industriales",
    tag: "Instalación",
    description:
      "Obra eléctrica para nueva línea de envasado de origen francés. Montaje, instalación y puesta en marcha en planta de producción.",
  },
  {
    id: "proyecto-03",
    cliente: "Milkaut – Savencia",
    industria: "Alimentos",
    servicio: "Instalaciones eléctricas · Automatización",
    tag: "Montaje",
    description:
      "Montaje eléctrico en línea CIP (Clean In Place). Instalación de canalizaciones, automatización de válvulas y puesta en marcha en planta láctea.",
  },
  {
    id: "proyecto-05",
    cliente: "Molfino",
    industria: "Alimentos",
    servicio: "Instalaciones eléctricas · CIP",
    tag: "Instalación",
    description:
      "Obra eléctrica para nuevo CIP de 2 líneas. Instalación de canalizaciones, instrumentación y puesta en marcha en planta de proceso.",
  },
  {
    id: "proyecto-04",
    cliente: "SADESA",
    industria: "Manufactura",
    servicio: "Tableros eléctricos · Revamping",
    tag: "Revamping",
    description:
      "Revamping de tablero de control de fulones de pelado. Ingeniería, montaje y puesta en marcha en planta de manufactura.",
  },
  {
    id: "proyecto-06",
    cliente: "FIMACO",
    industria: "Manufactura",
    servicio: "Ingeniería eléctrica",
    tag: "Ingeniería",
    description:
      "Centro de control de motores con variadores de frecuencia y arrancadores de media tensión. Ingeniería eléctrica de detalle, montaje y puesta en marcha en planta industrial.",
  },
] as const;

type Project = (typeof projects)[number];

/* ─── Ícono clipboard (caso de estudio completado) ─────────────────────────── */
function IconoCaso({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2
           M9 5a2 2 0 002 2h2a2 2 0 002-2
           M9 5a2 2 0 012-2h2a2 2 0 012 2
           m-6 9l2 2 4-4"
      />
    </svg>
  );
}

/* ─── Card compacta ─────────────────────────────────────────────────────────── */
function CardCompacta({ project }: { project: Project }) {
  return (
    <div className="flex flex-col h-full p-8 md:p-10">

      {/* Encabezado: badge + tag */}
      <div className="flex items-start justify-between mb-8">
        <span className="inline-flex items-center gap-1.5 text-[9px] font-normal tracking-[0.18em] uppercase text-brand-text/40 dark:text-white/30 border border-brand-light dark:border-brand-primary/40 rounded-sm px-2.5 py-1.5">
          <IconoCaso className="w-3 h-3 text-brand-accent/50 shrink-0" />
          Caso destacado
        </span>
        <span className="ml-4 text-[10px] font-medium tracking-[0.15em] uppercase text-brand-accent/50 shrink-0">
          {project.tag}
        </span>
      </div>

      {/* Cuerpo: ícono + cliente + datos */}
      <div className="flex-1 flex flex-col justify-center">
        <IconoCaso className="w-6 h-6 text-brand-accent/20 dark:text-brand-accent/15 mb-4" />

        <p className="text-[10px] font-normal text-brand-accent tracking-[0.2em] uppercase mb-2">
          Cliente
        </p>
        <p className="text-2xl md:text-3xl font-light text-brand-text dark:text-white tracking-tight mb-1">
          {project.cliente}
        </p>
        <p className="text-[9px] font-normal text-brand-text/30 dark:text-white/25 tracking-[0.18em] uppercase mt-3 mb-0.5">
          Industria
        </p>
        <p className="text-sm font-light text-brand-text/55 dark:text-white/45 mb-6">
          {project.industria}
        </p>
        <div className="w-10 h-px bg-brand-light dark:bg-brand-primary/40 mb-6" />

        <dl>
          <dt className="text-[9px] font-normal text-brand-text/30 dark:text-white/25 tracking-[0.18em] uppercase mb-0.5">
            Alcance
          </dt>
          <dd className="text-sm font-light text-brand-text/60 dark:text-white/45">
            {project.servicio}
          </dd>
        </dl>

        <p className="mt-5 text-xs font-light text-brand-text/35 dark:text-white/25 leading-relaxed">
          Consultanos sobre proyectos similares.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8 pt-6 border-t border-brand-light dark:border-brand-primary/30">
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 text-brand-accent text-sm font-medium tracking-wide hover:gap-3 transition-all duration-200"
        >
          Solicitar asesoramiento
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

/* ─── Card con detección automática de imagen ──────────────────────────────── */
function ProjectCard({ project }: { project: Project }) {
  const [imgState, setImgState] = useState<"probe" | "ok" | "error">("probe");
  const isCompact = imgState === "error";

  return (
    <article
      className={[
        "group flex flex-col h-full",
        "bg-white dark:bg-[#1A0020]",
        "transition-[transform,box-shadow,background-color] duration-300 ease-out",
        // Foto cards: sólo cambio de fondo al hover
        !isCompact
          ? "hover:bg-brand-bg dark:hover:bg-brand-primary/10"
          : [
              // Compactas: elevar 4px + sombra + z-index para aparecer sobre el gap
              "hover:bg-brand-bg dark:hover:bg-brand-primary/15",
              "hover:-translate-y-1",
              "hover:shadow-[0_8px_20px_-2px_rgba(0,0,0,0.09),0_3px_7px_-2px_rgba(0,0,0,0.05)]",
              "relative z-0 hover:z-10",
              // Mobile: compactas al final
              "order-last md:order-none",
            ].join(" "),
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {isCompact ? (
        <CardCompacta project={project} />
      ) : (
        <>
          {/* Imagen */}
          <div className="relative overflow-hidden aspect-[16/10] bg-brand-primary/15 dark:bg-brand-primary/30 shrink-0">
            <Image
              src={`/proyectos/${project.id}.webp`}
              alt={`${project.cliente} — ${project.servicio}`}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              onLoad={() => setImgState("ok")}
              onError={() => setImgState("error")}
            />
            {imgState === "ok" && (
              <span className="absolute top-4 left-4 text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-1.5 bg-brand-primary/80 text-brand-accent border border-brand-accent/25 backdrop-blur-sm rounded-sm">
                {project.tag}
              </span>
            )}
          </div>

          {/* Texto */}
          <div className="p-7 md:p-8 flex-1">
            <p className="text-[10px] font-normal text-brand-accent tracking-[0.2em] uppercase mb-1">
              Cliente
            </p>
            <p className="text-xl md:text-2xl font-light text-brand-text dark:text-white tracking-tight mb-5">
              {project.cliente}
            </p>
            <div className="w-10 h-px bg-brand-light dark:bg-brand-primary/40 mb-5" />
            <p className="text-sm text-brand-text/55 dark:text-white/40 font-light leading-relaxed mb-6">
              {project.description}
            </p>
            <p className="text-[10px] text-brand-text/35 dark:text-white/25 font-normal tracking-[0.15em] uppercase">
              {project.servicio}
            </p>
          </div>
        </>
      )}
    </article>
  );
}

/* ─── Sección ───────────────────────────────────────────────────────────────── */
export default function Projects() {
  return (
    <section id="obras" className="py-20 md:py-28 bg-brand-bg dark:bg-[#1A0020]">
      <div className="container mx-auto px-5 xl:px-10">

        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-brand-accent text-xs tracking-[0.25em] uppercase font-normal mb-3">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-brand-text dark:text-white leading-tight heading-accent">
              Proyectos realizados
            </h2>
            <p className="mt-6 text-sm text-brand-text/55 dark:text-white/45 font-light leading-relaxed max-w-lg">
              Proyectos de alta complejidad técnica ejecutados en plantas industriales
              de Santa Fe y la región.
            </p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 inline-flex items-center gap-2 text-brand-accent text-sm font-medium tracking-wide border-b border-brand-accent/40 pb-px hover:border-brand-accent transition-colors"
          >
            Consultá tu proyecto
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Grid 2 cols — gap-px crea líneas de 1px entre cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-light dark:bg-brand-primary/30 rounded overflow-hidden">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
