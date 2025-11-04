
const URL = "./db/equipos.json"
const URL2 = "./db/premios.json"

function cargarEquipos() {
    const errorEquipos = "Error al cargar"
    fetch(URL)
        .then(response => response.json())
        .then(data => {
          tablaEquipos(data)
        })
        .catch()
        .finally()
} 
cargarEquipos()

let section = document.getElementById ("section")
function tablaEquipos (equiposArray) {
  equiposArray.forEach(equipo => {
    const card = document.createElement ("div")
    card.innerHTML = `<table>
                        <thead>
                          <tr>
                            <th>Equipo</th>
                            <th>Jugados</th>
                            <th>Ganados</th>
                            <th>Empates</th>
                            <th>Derrotas</th>
                            <th>Puntos</th>
                            <th>Pos</th>
                        </thead>
                        <tbody>
                            <tr>
                              <td>${equipo.nombre}</td>
                              <td>${equipo.jugados}</td>
                              <td>${equipo.ganados}</td>
                              <td>${equipo.empates}</td>
                              <td>${equipo.derrotas}</td>
                              <td>${equipo.puntos}</td>
                              <td>${equipo.posicion}</td>
                            </tr>`
    section.appendChild(card)
    
  })
}

function inscribirEquipo(){   
const formulario = document.getElementById("miFormulario")
formulario.addEventListener("submit", function (event) {
    event.preventDefault()

    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value
    const equipoInscripto = document.getElementById("equipo").value
    const datosEquipo = {nombre, email, equipoInscripto}

    localStorage.setItem ("nuevoEquipo", JSON.stringify(datosEquipo))
    formulario.reset()
    Swal.fire({
      title: "equipo inscripto!!",
      icon: "success",
      draggable: true
    });
  })
}
inscribirEquipo()


let contenedorVouchers = document.getElementById("productos-container")
function tarjetasPremios (productos){
  productos.forEach(premio => {
    const nuevoPremio = document.createElement("div")
    nuevoPremio.classList = "card-producto"
    nuevoPremio.innerHTML = `
      <img src="./assets/vouchers/${premio.id}.png">
      <h3>${premio.titulo}</h3>
      <button>agregar al carrito</button> 
    `
    contenedorVouchers.appendChild(nuevoPremio)
    nuevoPremio.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(premio)) 
  })
}


async function obtenerPremios() {
  
    const errorPremios = "Error al cargar"
    try {
      const response = await fetch(URL2)
      const data = await response.json()
      tarjetasPremios(data)
    } catch (err) {
        document.body.append(errorPremios, err)
    } finally { 
    }
}

obtenerPremios()




