# Catalogo de Servicios Medicos

Directorio operativo de proveedores medicos. Incluye teleconsultas, visitas a domicilio, prescripciones, especialidades medicas y clinicas.

## Activar GitHub Pages

1. Ve a **Settings -> Pages**
2. En *Branch* selecciona `main` / carpeta `/ (root)`
3. Guarda - tu catalogo estara disponible en:

**https://samgt55.github.io/medical-service-catalog/**

## Estructura

```
|-- index.html       # Interfaz principal
|-- css/style.css    # Estilos responsive
|-- js/app.js        # Logica de filtros y renderizado
|-- data/services.js # Datos de proveedores (editable)
`-- README.md
```

## Funcionalidades

- **5 categorias**: Teleconsulta - Domicilio - Prescripcion - Especialidades - Clinicas
- **Busqueda en tiempo real** por nombre, pais o ciudad
- **Filtro por pais** - 22 paises disponibles
- **Diseno responsive** para movil y escritorio
- **Sin dependencias externas** - 100% estatico, listo para GitHub Pages

## Actualizar datos

Edite `data/services.js`. Cada entrada sigue este esquema:

```js
{
  name: "Nombre del proveedor",
  lang: "Idioma(s)",
  phone: "Telefono",    // opcional
  email: "Correo",     // opcional
  schedule: "Horario",
  country: "Pais",
  city: "Ciudad",      // opcional
  note: "Instrucciones" // opcional
}
```

*Ultima actualizacion: Junio 2026 - Uso interno operativo*
