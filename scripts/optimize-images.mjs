import sharp from "../node_modules/sharp/lib/index.js";
import { existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dir = dirname(fileURLToPath(import.meta.url));
const pub = resolve(__dir, "../public");

const tasks = [
  // Hero: candidato nuevo (instalación Marfrig) → hero-obra.webp, max 250KB
  {
    in:  `${pub}/hero/hero-candidato.jpg`,
    out: `${pub}/hero/hero-obra.webp`,
    width: 1920,
    quality: 78,
    label: "hero-obra.webp",
  },
  // campo-07: cámara de alta resolución (5.8MB) → webp optimizado
  {
    in:  `${pub}/empresa/campo-07.jpg`,
    out: `${pub}/empresa/campo-07.webp`,
    width: 1200,
    quality: 75,
    label: "campo-07.webp",
  },
  // Resto de campos (WhatsApp JPEGs) — optimimizar también
  ...Array.from({ length: 9 }, (_, i) => i + 1)
    .filter((n) => n !== 7)
    .map((n) => ({
      in:  `${pub}/empresa/campo-0${n}.jpg`,
      out: `${pub}/empresa/campo-0${n}.webp`,
      width: 1200,
      quality: 78,
      label: `campo-0${n}.webp`,
    })),
  // Proyectos
  ...Array.from({ length: 6 }, (_, i) => i + 1).map((n) => ({
    in:  `${pub}/proyectos/proyecto-0${n}.jpg`,
    out: `${pub}/proyectos/proyecto-0${n}.webp`,
    width: 1400,
    quality: 80,
    label: `proyecto-0${n}.webp`,
  })),
];

for (const t of tasks) {
  if (!existsSync(t.in)) { console.log(`SKIP (no existe): ${t.label}`); continue; }
  const buf = await sharp(t.in)
    .resize(t.width, null, { withoutEnlargement: true })
    .webp({ quality: t.quality })
    .toBuffer();
  await sharp(buf).toFile(t.out);
  const kb = Math.round(buf.length / 1024);
  console.log(`✓ ${t.label} — ${kb} KB`);
}
