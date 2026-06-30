# 🏥 Catálogo de Servicios Médicos

Directorio operativo de proveedores médicos con soporte multilingüe. Incluye teleconsultas, visitas a domicilio, prescripciones, especialidades médicas y clínicas.

## 🚀 Activar GitHub Pages

1. Ve a **Settings → Pages**
2. En *Branch* selecciona `main` / carpeta `/ (root)`
3. Guarda — tu catálogo estará disponible en:

**`https://samgt55.github.io/medical-service-catalog/`**

## 📁 Estructura

```
├── index.html          # Interfaz principal
├── css/style.css       # Estilos responsive
├── js/app.js           # Lógica de filtros y renderizado
├── data/services.js    # Datos de proveedores (editable)
└── README.md
```

## 🔍 Funcionalidades

- **5 categorías**: Teleconsulta · Domicilio · Prescripción · Especialidades · Clínicas
- **Búsqueda en tiempo real** por nombre, idioma o país
- **Filtro por idioma** — 15 idiomas disponibles
- **Diseño responsive** para móvil y escritorio
- **Sin dependencias externas** — 100% estático, listo para GitHub Pages

## ✏️ Actualizar datos

Edita `data/services.js`. Cada entrada sigue este esquema:

```js
{
  name: "Nombre del proveedor",
  lang: "Idioma(s)",
  phone: "Teléfono",       // opcional
  email: "Correo",         // opcional
  schedule: "Horario",
  country: "País",
  city: "Ciudad",          // opcional
  note: "Instrucciones"    // opcional
}
```

---
*Última actualización: Junio 2026 — Uso interno operativo*