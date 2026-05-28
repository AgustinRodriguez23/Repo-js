
const contenedorVouchers = document.getElementById("productos-container");
const unidadesElement = document.getElementById("unidades");
const carritoVacio = document.getElementById("carrito-vacio");
const reiniciarBtn = document.getElementById("reiniciar");
const descargarBtn = document.getElementById("descargar");


function renderCarrito() {
  const productos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  contenedorVouchers.innerHTML = "";

  const hayProductos = productos.length > 0;
  carritoVacio.classList.toggle("disable", hayProductos);
  contenedorVouchers.classList.toggle("disable", !hayProductos);
  document.getElementById("totales").classList.toggle("disable", !hayProductos);

  productos.forEach((premio) => {
    const card = document.createElement("div");
    card.className = "card-producto";
    card.innerHTML = `
      <img src="../assets/vouchers/${premio.id}.png" alt="${premio.titulo}">
      <h3>${premio.titulo}</h3>
      <div class="qty-controls">
        <button class="boton-carrito btn-restar" aria-label="Quitar uno">−</button>
        <span class="cant">${premio.cantidad}</span>
        <button class="boton-carrito btn-agregar" aria-label="Agregar uno">+</button>
      </div>
    `;

    card.querySelector(".btn-agregar").addEventListener("click", () => {
      agregarAlCarrito(premio);
      renderCarrito();
      actualizarTotales();
    });

    card.querySelector(".btn-restar").addEventListener("click", () => {
      restarAlCarrito(premio);
      renderCarrito();
      actualizarTotales();
    });

    contenedorVouchers.appendChild(card);
  });

  actualizarTotales();
}


function actualizarTotales() {
  const productos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const total = productos.reduce((acc, p) => acc + p.cantidad, 0);
  unidadesElement.textContent = total;
}


reiniciarBtn.addEventListener("click", () => {
  Swal.fire({
    title: "¿Vaciar el carrito?",
    text: "Se eliminarán todos los vouchers seleccionados.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, vaciar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#e53935",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem(STORAGE_KEY);
      renderCarrito();
      actualizarContadorHeader();
    }
  });
});


descargarBtn.addEventListener("click", () => {
  const productos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  if (!productos.length) return;

  const texto = productos
    .map((p) => `• ${p.titulo} × ${p.cantidad}`)
    .join("\n");
  const blob = new Blob([`TodoTorneos — Vouchers seleccionados\n\n${texto}`], {
    type: "text/plain",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "vouchers.txt";
  a.click();
  URL.revokeObjectURL(url);
});


renderCarrito();
