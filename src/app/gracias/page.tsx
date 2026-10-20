import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mensaje recibido",
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-brand-bg dark:bg-[#1A0020] flex items-center justify-center px-5">
      <div className="max-w-md w-full text-center">
        <div className="w-16 h-16 rounded-full border border-brand-accent/30 text-brand-accent flex items-center justify-center mx-auto mb-6">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-light text-brand-text dark:text-white mb-3 tracking-tight">
          Mensaje recibido
        </h1>
        <p className="text-brand-text/50 dark:text-white/40 text-sm font-light leading-relaxed mb-8">
          Gracias por contactarnos. Te respondemos a la brevedad con una propuesta técnica.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white text-sm font-normal tracking-wide rounded transition-all duration-200"
          >
            Volver al inicio
          </Link>
          <a
            href="https://wa.me/5493496418221?text=Hola%20INGELEC%2C%20quisiera%20consultar%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-brand-light dark:border-brand-primary/40 text-brand-text dark:text-white text-sm font-normal tracking-wide rounded hover:border-brand-accent/50 transition-all duration-200"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
