"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#inicio",    label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#clientes",  label: "Clientes" },
  { href: "#nosotros",  label: "Nosotros" },
  { href: "#obras",     label: "Proyectos" },
  { href: "#contacto",  label: "Contacto" },
];

export default function Header() {
  const [isOpen,   setIsOpen]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const headerBg = scrolled || isOpen
    ? "bg-brand-primary shadow-lg shadow-black/20"
    : "bg-gradient-to-b from-black/50 to-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto px-5 xl:px-10">
        <nav className="flex items-center justify-between h-16 md:h-20">

          {/* ── Logo ── */}
          <a
            href="#inicio"
            onClick={(e) => scrollTo(e, "#inicio")}
            className="shrink-0"
            aria-label="INGELEC – Inicio"
          >
            {!logoError ? (
              <Image
                src="/logo-ingelec.svg"
                alt="INGELEC San Carlos SRL"
                width={160}
                unoptimized
                height={44}
                className="h-9 md:h-11 w-auto object-contain"
                priority
                onError={() => setLogoError(true)}
              />
            ) : (
              /* Fallback tipográfico mientras no haya logo */
              <span className="flex flex-col leading-none">
                <span className="text-xl md:text-2xl font-bold text-white tracking-[0.06em]">
                  INGELEC
                </span>
                <span className="text-[9px] text-brand-muted tracking-[0.22em] uppercase font-normal mt-0.5">
                  San Carlos SRL
                </span>
              </span>
            )}
          </a>

          {/* ── Desktop nav ── */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="px-4 py-2 text-sm font-normal tracking-wide text-white/80 hover:text-white transition-colors rounded hover:bg-white/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="ml-4">
              <a
                href="#contacto"
                onClick={(e) => scrollTo(e, "#contacto")}
                className="px-5 py-2.5 text-sm font-medium rounded border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white transition-all duration-200 tracking-wide"
              >
                Solicitar cotización
              </a>
            </li>
          </ul>

          {/* ── Hamburger ── */}
          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </nav>
      </div>

      {/* ── Mobile drawer ── */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <div className="bg-brand-primary border-t border-white/10 py-3">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="flex items-center px-6 py-3.5 text-white/80 hover:text-white hover:bg-white/5 transition-colors text-sm tracking-wide font-normal"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-6 py-3">
              <a
                href="#contacto"
                onClick={(e) => scrollTo(e, "#contacto")}
                className="block text-center py-3 rounded border border-brand-accent text-brand-accent font-medium text-sm tracking-wide hover:bg-brand-accent hover:text-white transition-all"
              >
                Solicitar cotización
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
