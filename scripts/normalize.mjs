/**
 * normalize.mjs
 * Normaliza orientación EXIF y reexporta como webp optimizado.
 * - sharp.rotate() sin argumentos: auto-rota según EXIF, luego descarta el tag
 * - No usa .withMetadata() → EXIF orientación queda en 1 (normal) tras el proceso
 * - Output: webp, max 1600px, quality 78
 */
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const sharpPath = path.join(root, "node_modules", "sharp", "lib", "index.js");
const { default: sharp } = await import(`file:///${sharpPath.replace(/\\/g, "/")}`);

const MAX_W   = 1600;
const QUALITY = 78;

/**
 * Procesa un archivo: auto-rota por EXIF → resize → webp → reemplaza.
 * Usa fichero temporal en el mismo directorio para evitar errores de copia cross-drive.
 */
async function normalize(filePath) {
  const dir  = path.dirname(filePath);
  const name = path.basename(filePath);
  const tmp  = path.join(dir, `.tmp-norm-${Date.now()}-${Math.random().toFixed(8)}.webp`);

  const before = fs.statSync(filePath).size;

  try {
    await sharp(filePath)
      .rotate()                              // auto-rota según EXIF, elimina tag
      .resize({ width: MAX_W, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(tmp);

    const after = fs.statSync(tmp).size;

    // Windows Defender may briefly lock the temp file after creation.
    // Retry rename up to 8 times with increasing delays; fall back to
    // readFileSync+writeFileSync if all retries fail.
    let renamed = false;
    for (let i = 0; i < 8; i++) {
      try {
        fs.renameSync(tmp, filePath);
        renamed = true;
        break;
      } catch {
        await new Promise(r => setTimeout(r, 150 * (i + 1)));
      }
    }
    if (!renamed) {
      const data = fs.readFileSync(tmp);
      fs.writeFileSync(filePath, data);
      try { fs.unlinkSync(tmp); } catch {}
    }

    const saved = Math.round((1 - after / before) * 100);
    const flag  = after > 200 * 1024 ? "⚠" : "✓";
    console.log(
      `  ${flag} ${name.padEnd(22)} ${String(Math.round(before / 1024)).padStart(6)} KB → ${String(Math.round(after / 1024)).padStart(5)} KB  (${saved > 0 ? "-" : "+"}${Math.abs(saved)}%)`
    );
    return { name, before, after };
  } catch (err) {
    try { fs.unlinkSync(tmp); } catch {}
    console.error(`  ✗ ${name}: ${err.message}`);
    return null;
  }
}

// ── Folders a procesar ──────────────────────────────────────────────────────
const folders = [
  { dir: path.join(root, "public", "empresa"),   pattern: /^campo-\d+\.webp$/ },
  { dir: path.join(root, "public", "proyectos"), pattern: /^proyecto-\d+\.webp$/ },
];

let total = 0, savedBytes = 0;

for (const { dir: folder, pattern } of folders) {
  const files = fs.readdirSync(folder)
    .filter(f => pattern.test(f))
    .sort();

  if (files.length === 0) continue;

  console.log(`\n📁 ${path.relative(root, folder)} (${files.length} archivos)`);

  for (const file of files) {
    const result = await normalize(path.join(folder, file));
    if (result) {
      total++;
      savedBytes += result.before - result.after;
    }
  }
}

console.log(`\n──────────────────────────────────`);
console.log(`Procesados: ${total} archivos`);
console.log(`Espacio liberado: ${Math.round(savedBytes / 1024)} KB (${Math.round(savedBytes / 1024 / 1024 * 10) / 10} MB)`);
