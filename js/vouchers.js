const STORAGE_KEY = "premios";

function agregarAlCarrito(producto) {
  const carrito = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const indice = carrito.findIndex((p) => p.id === producto.id);
  let cantidadActual;

  if (indice === -1) {
    carrito.push({ ...producto, cantidad: 1 });
    cantidadActual = 1;
  } else {
    carrito[indice].cantidad++;
    cantidadActual = carrito[indice].cantidad;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(carrito));
  actualizarContadorHeader();
  return cantidadActual;
}

function restarAlCarrito(producto) {
  const carrito = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const indice = carrito.findIndex((p) => p.id === producto.id);
  if (indice === -1) return;

  if (carrito[indice].cantidad === 1) {
    carrito.splice(indice, 1);
  } else {
    carrito[indice].cantidad--;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(carrito));
  actualizarContadorHeader();
}

function actualizarContadorHeader() {
  const el = document.getElementById("cuenta-premios");
  if (!el) return;

  const carrito = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const total = carrito.reduce((acc, p) => acc + p.cantidad, 0);
  el.textContent = total;
}

actualizarContadorHeader();
