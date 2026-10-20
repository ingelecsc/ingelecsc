"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

/*
 * Dimensiones obtenidas con sharp tras normalización EXIF (normalize.mjs).
 * Si una imagen no existe → onError → se omite del masonry y la navegación.
 * Para agregar imágenes: colocar campo-XX.webp en public/empresa/ y agregar entrada al array.
 */
const images = [
  { src: "/empresa/campo-01.webp",  w: 900,  h: 1600, alt: "Instalación de nueva línea industrial" },
  { src: "/empresa/campo-02.webp",  w: 1600, h: 2138, alt: "Montaje y puesta en marcha de tablero" },
  { src: "/empresa/campo-03.webp",  w: 1600, h: 2138, alt: "Sistema de control eléctrico — obra terminada" },
  { src: "/empresa/campo-04.webp",  w: 1319, h: 1752, alt: "Intervención técnica en planta industrial" },
  { src: "/empresa/campo-05.webp",  w: 1283, h: 522,  alt: "Traslado y reconexión de equipo industrial" },
  { src: "/empresa/campo-06.webp",  w: 1600, h: 2138, alt: "Instalación eléctrica en planta de proceso" },
  { src: "/empresa/campo-09.webp",  w: 1600, h: 3463, alt: "Instalación eléctrica en proceso industrial" },
  { src: "/empresa/campo-16.webp",  w: 1600, h: 2844, alt: "Instalación eléctrica en nave industrial" },
  { src: "/empresa/campo-17.webp",  w: 1600, h: 2843, alt: "Cableado estructurado y tendido de cables" },
  { src: "/empresa/campo-18.webp",  w: 1600, h: 900,  alt: "Tablero eléctrico de media tensión" },
  { src: "/empresa/campo-19.webp",  w: 1600, h: 900,  alt: "Automatización de línea de proceso industrial" },
  { src: "/empresa/campo-20.webp",  w: 1600, h: 2843, alt: "Montaje de variadores de frecuencia" },
  { src: "/empresa/campo-21.webp",  w: 1600, h: 900,  alt: "Instalación de bandejas y canalizaciones" },
  { src: "/empresa/campo-22.webp",  w: 1600, h: 2071, alt: "Control eléctrico de equipo industrial" },
  { src: "/empresa/campo-23.webp",  w: 1080, h: 1080, alt: "Puesta en marcha de planta industrial" },
  { src: "/empresa/campo-24.webp",  w: 1080, h: 1080, alt: "Montaje de tablero PLC y automatización" },
  { src: "/empresa/campo-25.webp",  w: 1080, h: 1080, alt: "Montaje eléctrico en planta láctea — CIP" },
  { src: "/empresa/campo-26.webp",  w: 1080, h: 1080, alt: "Centro de control de motores industrial" },
];

/* ─── Miniatura en masonry ──────────────────────────────────────────────────── */
function GalleryImage({
  src, alt, w, h, onClick, onImgError,
}: {
  src: string; alt: string; w: number; h: number;
  onClick: () => void; onImgError: () => void;
}) {
  const [err, setErr] = useState(false);

  if (err) return null;

  const handleError = () => { setErr(true); onImgError(); };

  return (
    <button
      onClick={onClick}
      className="break-inside-avoid block w-full mb-3 overflow-hidden rounded group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
      aria-label={`Ampliar: ${alt}`}
    >
      <div className="relative w-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={w}
          height={h}
          className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={handleError}
        />
        <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/30 transition-colors duration-300 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
    </button>
  );
}

/* ─── Galería principal ─────────────────────────────────────────────────────── */
export default function Gallery() {
  const [active,  setActive]  = useState<number | null>(null);
  const [errored, setErrored] = useState<Set<number>>(new Set());

  const markError = useCallback((i: number) => {
    setErrored(prev => new Set(prev).add(i));
  }, []);

  // Índices de imágenes que sí cargaron (para navegación y contador)
  const validIdx = images
    .map((_, i) => i)
    .filter(i => !errored.has(i));

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (active === null) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  const navigate = useCallback((dir: 1 | -1) => {
    setActive(cur => {
      if (cur === null || validIdx.length === 0) return cur;
      const pos  = validIdx.indexOf(cur);
      const next = (pos + dir + validIdx.length) % validIdx.length;
      return validIdx[next];
    });
  }, [validIdx]);

  const prev = () => navigate(-1);
  const next = () => navigate(1);

  // Posición en la lista de válidos (para el contador)
  const activePos = active !== null ? validIdx.indexOf(active) : -1;

  return (
    <section id="galeria" className="py-20 md:py-28 bg-brand-bg dark:bg-brand-primary/10">
      <div className="container mx-auto px-5 xl:px-10">

        <div className="mb-12 md:mb-14">
          <p className="text-brand-accent text-xs tracking-[0.25em] uppercase font-normal mb-3">
            Trabajo en campo
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-brand-text dark:text-white leading-tight heading-accent">
            Galería de obras
          </h2>
        </div>

        {/* Masonry — 2 cols mobile, 3 tablet, 4 desktop */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {images.map((img, i) => (
            <GalleryImage
              key={img.src}
              {...img}
              onClick={() => setActive(i)}
              onImgError={() => markError(i)}
            />
          ))}
        </div>
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────────────────── */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={images[active].alt}
        >
          {/* Anterior */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all"
            aria-label="Anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Imagen */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active].src}
              alt={images[active].alt}
              width={images[active].w}
              height={images[active].h}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded"
              priority
            />
            <p className="absolute bottom-0 inset-x-0 text-center text-white/40 text-xs font-light py-3 bg-gradient-to-t from-black/40 to-transparent rounded-b">
              {images[active].alt}
            </p>
          </div>

          {/* Siguiente */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all"
            aria-label="Siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cerrar */}
          <button
            onClick={close}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all"
            aria-label="Cerrar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Contador — solo imágenes válidas */}
          {activePos >= 0 && (
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 text-xs font-light">
              {activePos + 1} / {validIdx.length}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
