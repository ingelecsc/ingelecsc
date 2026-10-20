import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const sharpPath = path.join(root, "node_modules", "sharp", "lib", "index.js");
const { default: sharp } = await import(`file:///${sharpPath.replace(/\\/g, "/")}`);

async function compressToFile(src, dest, width, quality) {
  // Write to a temp file in the SAME directory, then rename
  const dir = path.dirname(dest);
  const tmp = path.join(dir, `.tmp-${Date.now()}.webp`);
  try {
    await sharp(src)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toFile(tmp);
    const size = fs.statSync(tmp).size;
    fs.renameSync(tmp, dest);
    return size;
  } catch (e) {
    try { fs.unlinkSync(tmp); } catch {}
    throw e;
  }
}

async function compressUnder(src, dest, maxBytes, attempts) {
  for (const { width, quality } of attempts) {
    const size = await compressToFile(src, dest, width, quality);
    const kb = Math.round(size / 1024);
    console.log(`    [${width}px q${quality}] → ${kb} KB`);
    if (size <= maxBytes) return kb;
    // If over, the dest file is already written - next iteration overwrites
  }
}

// --- Hero (from .jpg source, always) ---
const heroSrc = path.join(root, "public", "hero", "hero-obra.jpg");
const heroDest = path.join(root, "public", "hero", "hero-obra.webp");
console.log("hero-obra.webp (target ≤250KB):");
await compressUnder(heroSrc, heroDest, 250 * 1024, [
  { width: 1920, quality: 72 },
  { width: 1600, quality: 65 },
  { width: 1400, quality: 60 },
  { width: 1200, quality: 55 },
  { width: 1024, quality: 50 },
  { width: 900,  quality: 45 },
  { width: 800,  quality: 42 },
]);

// --- Proyectos large files ---
const proyectos = ["proyecto-01", "proyecto-02", "proyecto-03", "proyecto-04"];

for (const name of proyectos) {
  const file = path.join(root, "public", "proyectos", `${name}.webp`);
  const sizeBefore = fs.statSync(file).size;
  if (sizeBefore <= 180 * 1024) {
    console.log(`${name}.webp OK (${Math.round(sizeBefore / 1024)} KB)`);
    continue;
  }
  console.log(`\n${name}.webp (${Math.round(sizeBefore / 1024)} KB → target ≤180KB):`);
  // Read into buffer first so sharp doesn't lock the file
  const srcBuf = fs.readFileSync(file);
  const tmpSrc = path.join(path.dirname(file), `.tmp-src-${Date.now()}.webp`);
  fs.writeFileSync(tmpSrc, srcBuf);
  try {
    await compressUnder(tmpSrc, file, 180 * 1024, [
      { width: 1400, quality: 78 },
      { width: 1200, quality: 70 },
      { width: 1000, quality: 65 },
      { width: 900,  quality: 60 },
      { width: 800,  quality: 55 },
    ]);
  } finally {
    try { fs.unlinkSync(tmpSrc); } catch {}
  }
}

// --- Summary ---
console.log("\nFinal sizes:");
const allFiles = [
  { f: "public/hero/hero-obra.webp", max: 250 },
  { f: "public/proyectos/proyecto-01.webp", max: 180 },
  { f: "public/proyectos/proyecto-02.webp", max: 180 },
  { f: "public/proyectos/proyecto-03.webp", max: 180 },
  { f: "public/proyectos/proyecto-04.webp", max: 180 },
  { f: "public/proyectos/proyecto-05.webp", max: 180 },
  { f: "public/proyectos/proyecto-06.webp", max: 180 },
];
for (const { f, max } of allFiles) {
  const p = path.join(root, f);
  try {
    const kb = Math.round(fs.statSync(p).size / 1024);
    const ok = kb <= max;
    console.log(`  ${ok ? "✓" : "⚠"} ${f}: ${kb} KB ${ok ? "" : `(over ${max}KB)`}`);
  } catch {
    console.log(`  ✗ ${f}: MISSING`);
  }
}
