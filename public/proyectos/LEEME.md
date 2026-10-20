# public/proyectos/ — Fotos de proyectos destacados

Esta carpeta contiene las fotos que aparecen en la sección **Proyectos realizados**.

---

## Archivos necesarios

| Archivo          | Cliente asignado    | Servicio                      |
|------------------|---------------------|-------------------------------|
| `proyecto-01.webp` | PB Leiner         | Automatización · PLC Safety   |
| `proyecto-02.webp` | Royal Canin       | Montaje eléctrico industrial  |
| `proyecto-03.webp` | Milkaut – Savencia| Instalaciones de potencia     |
| `proyecto-04.webp` | SADESA            | Tableros eléctricos           |
| `proyecto-05.webp` | Molfino           | Automatización · SCADA        |
| `proyecto-06.webp` | FIMACO            | Ingeniería eléctrica          |

**Importante:** los textos de cliente, servicio y descripción se pueden
editar en `src/components/sections/Projects.tsx` — array `projects`.
Actualizá los datos para que coincidan con las fotos reales.

---

## Preparación de fotos

1. **Proporción ideal**: 16:10 o 16:9 (apaisada) — el componente usa `aspect-[16/10]`
2. **Resolución mínima**: 1200 × 750px
3. **Formato**: `.webp` — convertir con [squoosh.app](https://squoosh.app)
   - Calidad: 85%
   - Ancho máximo: 1800px
4. Nombrar exactamente como la tabla indica.

---

## Foto del hero

La imagen principal de la página se encuentra en:

```
public/hero/hero-obra.webp
```

- Proporción: 16:9 o panorámica (al menos 1920px de ancho)
- Contenido: foto amplia de un tablero, subestación o planta industrial
- Se superpone un overlay corporativo automáticamente
