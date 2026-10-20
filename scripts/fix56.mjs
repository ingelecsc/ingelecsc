import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const sharpPath = path.join(root, "node_modules", "sharp", "lib", "index.js");
const { default: sharp } = await import(`file:///${sharpPath.replace(/\\/g, "/")}`);

for (const name of ["proyecto-05", "proyecto-06"]) {
  const file = path.join(root, "public", "proyectos", `${name}.webp`);
  const srcBuf = fs.readFileSync(file);
  const buf = await sharp(srcBuf)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 70 })
    .toBuffer();
  fs.writeFileSync(file, buf);
  console.log(`${name}: ${Math.round(buf.length / 1024)} KB`);
}
