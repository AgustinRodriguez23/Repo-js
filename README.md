# TodoTorneos 🏆

Sitio web para la gestión y seguimiento de torneos de fútbol amateur. Permite visualizar la tabla de posiciones de la liga, inscribir equipos para la próxima edición y seleccionar vouchers de premios mediante un carrito persistente.

---

## 🚀 Demo

🔗 [https://repo-js.vercel.app/](https://repo-js.vercel.app/)

---

## ✨ Funcionalidades

- **Tabla de posiciones** — cargada dinámicamente desde `equipos.json`, ordenada por posición con badges para el podio (🥇🥈🥉)
- **Formulario de inscripción** — registra capitán, nombre de equipo y email con validación y feedback via SweetAlert2
- **Carrito de vouchers** — seleccioná premios desde el inicio y gestioná cantidades en la página del carrito
- **Persistencia** — el carrito se guarda en `localStorage`, sobrevive al cierre del navegador
- **Descarga de lista** — exporta los vouchers seleccionados como archivo `.txt`
- **Diseño responsive** — adaptado para mobile y desktop

---

## 🗂️ Estructura del proyecto

```
TodoTorneos/
├── index.html              # Página principal
├── pages/
│   └── carrito.html        # Página del carrito de premios
├── css/
│   ├── base.css            # Estilos compartidos (header, footer, variables)
│   ├── style.css           # Estilos de index.html
│   └── carrito.css         # Estilos de carrito.html
├── js/
│   ├── vouchers.js         # Lógica compartida del carrito (agregar/restar/contador)
│   ├── main.js             # Tabla de equipos, formulario, render de vouchers
│   └── carrito.js          # Lógica y render de la página del carrito
├── db/
│   ├── equipos.json        # Datos de equipos y posiciones
│   └── premios.json        # Catálogo de vouchers disponibles
└── assets/
    ├── images.png          # Favicon
    ├── premios.png         # Ícono del carrito
    └── vouchers/           # Imágenes de cada voucher (1.png … 9.png)
```

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 semántico | Estructura de las páginas |
| CSS3 + Variables CSS | Estilos, animaciones, diseño responsive |
| JavaScript ES6+ | Lógica, fetch, localStorage, DOM |
| [Bootstrap 5.3](https://getbootstrap.com/) | Grid y utilidades base |
| [SweetAlert2](https://sweetalert2.github.io/) | Alertas y confirmaciones |
| Google Fonts | Bebas Neue + Nunito |


---

## 📦 Datos

Los datos de equipos y premios están mockeados en archivos JSON locales dentro de `/db`. En un entorno real se reemplazarían por llamadas a una API REST.

**`equipos.json`** — campos por equipo:
```json
{
  "nombre": "Parma Sur",
  "jugados": 11,
  "ganados": 7,
  "empates": 3,
  "derrotas": 1,
  "puntos": 24,
  "posicion": 1
}
```

**`premios.json`** — campos por voucher:
```json
{
  "id": 1,
  "titulo": "jugador del partido"
}
```

---

## 🔧 Decisiones técnicas

- **`vouchers.js` como módulo compartido** — las funciones `agregarAlCarrito`, `restarAlCarrito` y `actualizarContadorHeader` son usadas tanto en `index.html` como en `carrito.html`, por eso viven en un archivo separado que se carga primero en ambas páginas.
- **Sin frameworks** — proyecto vanilla JS intencional para demostrar dominio de los fundamentos del lenguaje y el DOM.
- **localStorage como persistencia** — solución simple y sin dependencias para mantener el estado del carrito entre páginas y sesiones.

---

## 🙋 Autor

Proyecto personal desarrollado como práctica de frontend vanilla y para incluir en portafolio.
