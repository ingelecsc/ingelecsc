# INGELEC San Carlos SRL — Sitio Web Institucional

Sitio web institucional de INGELEC San Carlos SRL. Desarrollado con **Next.js 16** + **Tailwind CSS v4**, listo para deploy en **Vercel**.

---

## 🚀 Deploy en Vercel (paso a paso)

### 1. Crear repositorio en GitHub

```bash
git init
git add .
git commit -m "feat: sitio web institucional INGELEC San Carlos SRL"
git remote add origin https://github.com/TU_USUARIO/ingelecsc.git
git push -u origin main
```

### 2. Conectar con Vercel

1. Entrá a [vercel.com](https://vercel.com) e iniciá sesión con tu cuenta de GitHub
2. Hacé clic en **"Add New Project"**
3. Seleccioná el repositorio `ingelecsc`
4. Vercel detecta automáticamente que es Next.js — dejá la configuración por defecto
5. Hacé clic en **"Deploy"**

El primer deploy tarda ~2 minutos. Vercel te asigna una URL temporal como `ingelecsc.vercel.app`.

---

## 🌐 Apuntar el dominio `ingelecsc.com`

### Desde el panel de Vercel

1. En tu proyecto, andá a **Settings → Domains**
2. Hacé clic en **"Add Domain"**
3. Escribí `ingelecsc.com` y también `www.ingelecsc.com`
4. Vercel te muestra los registros DNS que necesitás configurar

### En tu registrador de dominio (Nic.ar, Namecheap, GoDaddy, etc.)

Configurá los siguientes registros DNS:

| Tipo   | Nombre | Valor                  |
|--------|--------|------------------------|
| A      | @      | `76.76.21.21`          |
| CNAME  | www    | `cname.vercel-dns.com` |

> Si tu registrador no soporta registro A en el apex (@), usá ALIAS o ANAME apuntando a `cname.vercel-dns.com`.

La propagación DNS puede tardar entre 15 minutos y 48 horas. Vercel emite el certificado SSL automáticamente.

---

## ✉️ Configurar el formulario de contacto

El formulario envía a `/api/contact`. Por defecto, los mensajes se loguean en los logs de Vercel Functions. Para recibir emails reales:

### Opción A — Resend (recomendado, gratis hasta 3.000 emails/mes)

```bash
npm install resend
```

Creá cuenta en [resend.com](https://resend.com) y obtenés tu API key.

En `src/app/api/contact/route.ts`, reemplazá el bloque de comentarios por:

```typescript
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "web@ingelecsc.com",
  to: process.env.EMAIL_TO!,
  subject: `[Web] Nuevo mensaje de ${name}`,
  html: `<h2>Mensaje desde ingelecsc.com</h2>
    <p><b>Nombre:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Empresa:</b> ${company || "—"}</p>
    <p><b>Asunto:</b> ${subject || "—"}</p>
    <hr><p>${message}</p>`,
});
```

Variables de entorno en Vercel → Settings → Environment Variables:

```
RESEND_API_KEY=re_xxxxxxxxxxxx
EMAIL_TO=contacto@ingelecsc.com
```

### Opción B — Formspree (sin código)

Creá una cuenta en [formspree.io](https://formspree.io), obtenés un endpoint y reemplazás el `fetch("/api/contact")` en los componentes de formulario.

---

## 📱 Configurar el número de WhatsApp

Editá `src/components/layout/WhatsAppButton.tsx`:

```typescript
const phone = "5492615000000"; // Código país + área + número (sin +, sin 0, sin 15)
```

Ejemplo: `+54 9 261 401-2345` → `"5492614012345"`

---

## 🎨 Personalización

### Colores de marca

En `src/app/globals.css`, bloque `@theme inline`:

```css
--color-brand-sky: #0ea5e9;    /* Celeste principal */
--color-brand-orange: #f97316; /* Naranja de acento */
--color-navy-900: #0a1628;     /* Azul oscuro de fondo */
```

### Datos de contacto

Buscá y reemplazá en los componentes:
- `+54 9 261 500-0000` → número real
- `contacto@ingelecsc.com` → email real
- `San Carlos, Mendoza, Argentina` → dirección exacta

### Logo

Reemplazá el texto "INGELEC" en `Header.tsx` y `Footer.tsx` con un componente `<Image>` de Next.js.

---

## 🛠️ Desarrollo local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Build de producción
npm run lint       # Verificar código
```

---

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx              ← Metadatos SEO y fuente Inter
│   ├── page.tsx                ← Landing page (todas las secciones)
│   ├── globals.css             ← Tema Tailwind v4 y utilidades CSS
│   └── api/contact/route.ts    ← API del formulario de contacto
└── components/
    ├── layout/
    │   ├── Header.tsx          ← Navbar sticky + mobile menu
    │   ├── Footer.tsx          ← Footer con links y contacto
    │   └── WhatsAppButton.tsx  ← Botón flotante WhatsApp
    ├── sections/
    │   ├── Hero.tsx            ← Pantalla completa de bienvenida
    │   ├── About.tsx           ← Quiénes somos y valores
    │   ├── Services.tsx        ← Grid de 8 servicios
    │   ├── Projects.tsx        ← Obras y proyectos
    │   ├── Clients.tsx         ← Clientes y testimonios
    │   ├── Contact.tsx         ← Formulario de contacto
    │   └── WorkWithUs.tsx      ← Trabajá con nosotros
    └── ui/
        └── SectionTitle.tsx    ← Componente reutilizable de títulos
```

---

## ✅ Checklist pre-lanzamiento

- [ ] Reemplazar número de WhatsApp real en `WhatsAppButton.tsx`
- [ ] Actualizar email y teléfono en `Contact.tsx` y `Footer.tsx`
- [ ] Configurar proveedor de email (Resend o Formspree)
- [ ] Agregar logo SVG/PNG de INGELEC en Header y Footer
- [ ] Agregar fotos reales de proyectos en la sección Obras
- [ ] Agregar logos de clientes reales en la sección Clientes
- [ ] Configurar Google Analytics (script en `layout.tsx`)
- [ ] Apuntar dominio `ingelecsc.com` en Vercel
- [ ] Verificar en móvil (iOS y Android)
- [ ] Probar formulario de contacto end-to-end

---

Desarrollado para **INGELEC San Carlos SRL** · ingelecsc.com
