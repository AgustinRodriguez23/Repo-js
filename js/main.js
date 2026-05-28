
const URL_EQUIPOS = "./db/equipos.json";
const URL_PREMIOS = "./db/premios.json";

async function cargarEquipos() {
  const section = document.getElementById("section");
  if (!section) return;

  try {
    const response = await fetch(URL_EQUIPOS);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    renderTabla(data, section);
  } catch (err) {
    section.innerHTML = `<p style="color:red;text-align:center;padding:16px;">
      Error al cargar los equipos. Intentá de nuevo más tarde.
    </p>`;
    console.error("cargarEquipos:", err);
  }
}

function renderTabla(equipos, contenedor) {
  const ordenados = [...equipos].sort((a, b) => a.posicion - b.posicion);
  const tabla = document.createElement("table");
  tabla.className = "tabla-liga";

  tabla.innerHTML = `
    <thead>
      <tr>
        <th>Equipo</th>
        <th>J</th>
        <th>G</th>
        <th>E</th>
        <th>D</th>
        <th>Pts</th>
        <th>Pos</th>
      </tr>
    </thead>
    <tbody>
      ${ordenados.map((eq) => `
        <tr>
          <td>${eq.nombre}</td>
          <td>${eq.jugados}</td>
          <td>${eq.ganados}</td>
          <td>${eq.empates}</td>
          <td>${eq.derrotas}</td>
          <td><strong>${eq.puntos}</strong></td>
          <td>${posBadge(eq.posicion)}</td>
        </tr>
      `).join("")}
    </tbody>
  `;

  contenedor.innerHTML = "";
  contenedor.appendChild(tabla);
}

function posBadge(pos) {
  if (pos <= 3) {
    return `<span class="pos-badge pos-${pos}">${pos}</span>`;
  }
  return `<span>${pos}</span>`;
}


function iniciarFormulario() {
  const formulario = document.getElementById("miFormulario");
  if (!formulario) return;

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const equipoInscripto = document.getElementById("equipo").value.trim();

    if (!nombre || !equipoInscripto) {
      Swal.fire({
        title: "Campos incompletos",
        text: "Por favor completá todos los campos.",
        icon: "warning",
      });
      return;
    }

    localStorage.setItem(
      "nuevoEquipo",
      JSON.stringify({ nombre, email, equipoInscripto })
    );
    formulario.reset();

    Swal.fire({
      title: "¡Equipo inscripto!",
      text: `"${equipoInscripto}" fue registrado correctamente.`,
      icon: "success",
      confirmButtonColor: "#1a1aff",
    });
  });
}

async function cargarPremios() {
  const contenedor = document.getElementById("productos-container");
  if (!contenedor) return;

  try {
    const response = await fetch(URL_PREMIOS);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    renderVouchers(data, contenedor);
  } catch (err) {
    contenedor.innerHTML = `<p style="color:red;text-align:center;padding:16px;">
      Error al cargar los premios. Intentá de nuevo más tarde.
    </p>`;
    console.error("cargarPremios:", err);
  }
}

function renderVouchers(premios, contenedor) {
  contenedor.innerHTML = "";

  premios.forEach((premio) => {
    const card = document.createElement("div");
    card.className = "card-producto";
    card.innerHTML = `
      <img src="./assets/vouchers/${premio.id}.png" alt="${premio.titulo}">
      <h3>${premio.titulo}</h3>
      <button class="btn-agregar" aria-label="Agregar ${premio.titulo} al carrito">
        Agregar al carrito
      </button>
    `;

    card.querySelector(".btn-agregar").addEventListener("click", () => {
      agregarAlCarrito(premio);
      Swal.fire({
        toast: true,
        position: "bottom-end",
        icon: "success",
        title: `"${premio.titulo}" agregado`,
        showConfirmButton: false,
        timer: 1800,
        timerProgressBar: true,
      });
    });

    contenedor.appendChild(card);
  });
}

cargarEquipos();
iniciarFormulario();
cargarPremios();
