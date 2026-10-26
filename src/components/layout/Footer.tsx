"use client";
import Image from "next/image";
import { useState } from "react";

const serviceLinks = [
  "Ingeniería eléctrica",
  "Montaje eléctrico industrial",
  "Automatización industrial",
  "Tableros eléctricos",
  "Instalaciones de potencia",
  "Servicios técnicos",
];

const navLinks = [
  { href: "#nosotros",  label: "Nosotros" },
  { href: "#obras",     label: "Proyectos" },
  { href: "#clientes",  label: "Clientes" },
  { href: "#trabaja",   label: "Trabajá con nosotros" },
  { href: "#contacto",  label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-brand-primary text-white/50">

      {/* Main */}
      <div className="container mx-auto px-5 xl:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-5">
              {!logoError ? (
                <Image
                  src="/logo-ingelec.svg"
                  alt="INGELEC San Carlos SRL"
                  width={160}
                  height={78}
                  unoptimized
                  className="h-9 w-auto object-contain brightness-0 invert opacity-90"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-xl font-bold text-white tracking-[0.06em]">
                  INGELEC
                </span>
              )}
            </div>
            <p className="text-xs font-light leading-relaxed mb-6 text-white/40">
              Ingeniería eléctrica y automatización industrial.<br />
              San Carlos Centro, Santa Fe, Argentina.
            </p>
            {/* Social */}
            <div className="flex gap-2">
              <a href="https://instagram.com/ingelec.argentina" target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 flex items-center justify-center rounded border border-white/10 hover:border-brand-accent/40 hover:text-brand-accent transition-all text-white/30">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 flex items-center justify-center rounded border border-white/10 hover:border-brand-accent/40 hover:text-brand-accent transition-all text-white/30">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-[10px] font-normal text-white/30 tracking-[0.2em] uppercase mb-5">
              Servicios
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <span className="text-xs font-light text-white/40 hover:text-white/60 transition-colors cursor-default">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-[10px] font-normal text-white/30 tracking-[0.2em] uppercase mb-5">
              Empresa
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs font-light text-white/40 hover:text-white/70 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-[10px] font-normal text-white/30 tracking-[0.2em] uppercase mb-5">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@ingelecsc.com"
                  className="text-xs font-light text-white/40 hover:text-white/70 transition-colors break-all">
                  info@ingelecsc.com
                </a>
              </li>
              <li>
                <p className="text-xs font-light text-white/30">
                  San Carlos Centro · Santa Fe · Argentina
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container mx-auto px-5 xl:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/35 font-light">
          <p>© {year} INGELEC San Carlos SRL — Todos los derechos reservados.</p>
          <p className="text-white/20">ingelecsc.com</p>
        </div>
      </div>
    </footer>
  );
}
