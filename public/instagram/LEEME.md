# Imágenes de Instagram — Instrucciones de reemplazo

Reemplazá los archivos SVG placeholder con fotos reales descargadas de @ingelec.argentina.

---

## Archivos necesarios

| Archivo     | Proporción ideal | Descripción sugerida              |
|-------------|-----------------|-----------------------------------|
| `ig-01.svg` → `ig-01.webp` | 16:9 landscape  | Tablero eléctrico terminado       |
| `ig-02.svg` → `ig-02.webp` | 3:4 portrait    | Técnico trabajando en panel       |
| `ig-03.svg` → `ig-03.webp` | 1:1 square      | Detalle de cableado / borneras    |
| `ig-04.svg` → `ig-04.webp` | 4:3 landscape   | Montaje en planta industrial      |
| `ig-05.svg` → `ig-05.webp` | 2:3 portrait    | Tablero abierto — interior        |
| `ig-06.svg` → `ig-06.webp` | 1:1 square      | PLC / módulos de automatización   |
| `ig-07.svg` → `ig-07.webp` | 16:9 landscape  | Vista general de planta           |
| `ig-08.svg` → `ig-08.webp` | 3:4 portrait    | Montaje conduit / bandejas        |
| `ig-09.svg` → `ig-09.webp` | 1:1 square      | HMI / pantalla SCADA              |

---

## Cómo descargar desde Instagram

1. Abrí Instagram en el celular → perfil @ingelec.argentina
2. Elegí la foto → tocá los 3 puntos → "Guardar en galería" (o usá el botón de descarga)
3. Pasá las fotos a la PC (WhatsApp, cable USB, Google Drive, etc.)
4. **Convertí a .webp** para mejor performance (herramienta online: squoosh.app)
5. Redimensioná a máximo **1800px** en el lado más largo antes de convertir

---

## Cómo reemplazar los placeholders

1. Guardá las fotos en esta misma carpeta `public/instagram/` con los nombres indicados
2. Abrí `src/components/sections/Gallery.tsx` y `src/components/sections/InstagramFeed.tsx`
3. Cambiá la extensión en el array `images` / `posts`:
   ```ts
   // Antes:
   { src: "/instagram/ig-01.svg", ... }
   // Después:
   { src: "/instagram/ig-01.webp", ... }
   ```
4. Actualizá también los valores `w` y `h` con las dimensiones reales de cada foto
5. Borrá los archivos `.svg` placeholder cuando ya no los necesites

---

## Hero (imagen principal)

El hero usa `public/hero/hero-obra.svg` como placeholder.

Para reemplazarlo con una foto real:
1. Guardá la foto real como `public/hero/hero-obra.jpg` (o `.webp`)
2. En `src/components/sections/Hero.tsx` cambiá:
   ```tsx
   src="/hero/hero-obra.svg"
   // por:
   src="/hero/hero-obra.jpg"
   ```

Foto recomendada: una toma amplia de un tablero grande, una subestación,
o una planta con equipamiento visible. Formato apaisado (16:9) funciona mejor.

---

## Clientes (logos)

Guardá logos en `public/clientes/` con estos nombres exactos:

| Archivo               | Empresa           |
|-----------------------|-------------------|
| `pb-leiner.png`       | PB Leiner         |
| `milkaut.png`         | Milkaut–Savencia  |
| `royal-canin.png`     | Royal Canin       |
| `sadesa.png`          | SADESA            |
| `pronuser.png`        | Pronuser          |
| `molfino.png`         | Molfino           |
| `fimaco.png`          | FIMACO            |
| `sanitek.png`         | Sanitek           |
| `espaqfe.png`         | ESPAQFE Ingeniería|
| `fimet.png`           | Fimet             |

Formato: PNG con fondo transparente. Ancho mínimo 300px.
