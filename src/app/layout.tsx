import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ingelecsc.com"),
  title: {
    default: "INGELEC San Carlos | Ingeniería Eléctrica y Automatización Industrial",
    template: "%s | INGELEC San Carlos",
  },
  description:
    "Ingeniería eléctrica, automatización industrial y montaje eléctrico para la industria. +15 años ejecutando proyectos en Santa Fe y la región. San Carlos Centro, Argentina.",
  keywords: [
    "ingeniería eléctrica",
    "automatización industrial",
    "montaje eléctrico industrial",
    "PLC",
    "SCADA",
    "tableros eléctricos",
    "instalaciones de potencia",
    "San Carlos Centro",
    "Santa Fe",
    "Argentina",
    "INGELEC",
  ],
  authors: [{ name: "INGELEC San Carlos SRL", url: "https://ingelecsc.com" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "INGELEC San Carlos | Ingeniería Eléctrica y Automatización Industrial",
    description:
      "Soluciones eléctricas integrales para la industria. Automatización, montaje, tableros y puesta en marcha. +15 años de trayectoria. Santa Fe, Argentina.",
    type: "website",
    locale: "es_AR",
    siteName: "INGELEC San Carlos SRL",
    url: "https://ingelecsc.com",
    images: [
      {
        url: "/hero/hero-obra.webp",
        width: 1920,
        height: 1080,
        alt: "INGELEC San Carlos — Instalaciones eléctricas industriales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INGELEC San Carlos | Ingeniería Eléctrica y Automatización Industrial",
    description:
      "Automatización industrial y montaje eléctrico para la industria. Santa Fe, Argentina.",
    images: ["/hero/hero-obra.webp"],
  },
  alternates: { canonical: "https://ingelecsc.com" },
  icons: {
    icon: [
      { url: "/logo-ingelec.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo-ingelec.svg",
    apple: "/logo-ingelec.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${dmSans.variable} scroll-smooth`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KE3HF4XQPS"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KE3HF4XQPS');
            gtag('config', 'GT-5DFFR4P');
          `}
        </Script>
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
