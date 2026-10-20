"use client";
import { useState } from "react";
import Image from "next/image";

const clients = [
  { name: "PB Leiner",          slug: "pb-leiner",   sector: "Química" },
  { name: "Milkaut – Savencia", slug: "milkaut",     sector: "Alimentos" },
  { name: "Royal Canin",        slug: "royal-canin", sector: "Consumo masivo" },
  { name: "SADESA",             slug: "sadesa",      sector: "Manufactura" },
  { name: "Pronuser",           slug: "pronuser",    sector: "Alimentos" },
  { name: "Molfino",            slug: "molfino",     sector: "Alimentos" },
  { name: "FIMACO",             slug: "fimaco",      sector: "Manufactura" },
  { name: "Sanitek",            slug: "sanitek",     sector: "Manufactura" },
  { name: "ESPAQFE Ingeniería", slug: "espaqfe",     sector: "Ingeniería" },
  { name: "Fimet",              slug: "fimet",       sector: "Manufactura" },
  { name: "Plásticos Bostico", slug: "plasticos-bostico", sector: "Manufactura" },
  { name: "Tetra Pak",         slug: "tetra-pak",        sector: "Alimentos" },
  { name: "Tremblay",          slug: "tremblay",         sector: "Manufactura" },
];

function ClientLogo({ name, slug }: { name: string; slug: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <span className="text-sm font-normal text-brand-primary/45 dark:text-white/35 text-center leading-tight tracking-wide">
        {name}
      </span>
    );
  }

  return (
    <Image
      src={`/clientes/${slug}.png`}
      alt={name}
      width={180}
      height={60}
      className="h-8 w-auto max-w-[130px] object-contain object-center logo-grayscale"
      onError={() => setHasError(true)}
    />
  );
}

export default function Clients() {
  return (
    <section id="clientes" className="py-20 md:py-28 bg-white dark:bg-brand-primary/20">
      <div className="container mx-auto px-5 xl:px-10">

        {/* Encabezado */}
        <div className="max-w-2xl mb-10">
          <p className="text-brand-accent text-xs tracking-[0.25em] uppercase font-normal mb-3">
            Clientes
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-brand-text dark:text-white leading-tight heading-accent">
            Empresas que confiaron<br className="hidden sm:block" /> en INGELEC
          </h2>
        </div>

        {/* Stat strip */}
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-14 pb-10 border-b border-brand-light dark:border-brand-primary/30">
          <span className="text-3xl md:text-4xl font-light text-brand-text dark:text-white tracking-tight">
            +15 años
          </span>
          <span className="text-sm text-brand-text/50 dark:text-white/40 font-light">
            ejecutando proyectos eléctricos e industriales para empresas líderes de la región.
          </span>
        </div>

        {/* Grid de logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-l border-t border-brand-light dark:border-brand-primary/30 rounded overflow-hidden">
          {clients.map((client) => (
            <div
              key={client.slug}
              className="group flex flex-col items-center justify-center gap-2.5 p-8 border-r border-b border-brand-light dark:border-brand-primary/30 hover:bg-brand-bg dark:hover:bg-brand-primary/30 transition-colors min-h-[100px]"
            >
              <div className="h-8 flex items-center justify-center">
                <ClientLogo name={client.name} slug={client.slug} />
              </div>
              <span className="text-[10px] text-brand-text/30 dark:text-white/25 font-normal tracking-[0.12em] uppercase text-center group-hover:text-brand-accent/60 transition-colors">
                {client.sector}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
