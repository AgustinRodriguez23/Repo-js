

// const equipos = [
//   {
//     nombre: "Parma Sur", jugados: 11, ganados: 7, empates: 3, derrotas: 1, puntos: 24, posicion: 1,
//   },
//   {
//     nombre: "Los Euca", jugados: 11, ganados: 6, empates: 3, derrotas: 2, puntos: 21, posicion: 2,
//   },
//   {
//     nombre: "El rejunte", jugados: 11, ganados: 6, empates: 1, derrotas: 4, puntos: 19, posicion: 3,
//   },
//   {
//     nombre: "Torino", jugados: 11, ganados: 5, empates: 3, derrotas: 3, puntos: 18, posicion: 4,
//   },
//   {
//     nombre: "Magios", jugados: 11, ganados: 5, empates: 3, derrotas: 3, puntos: 18, posicion: 5,
//   },
//   {
//     nombre: "Alvarado Fc", jugados: 11, ganados: 4, empates: 2, derrotas: 5, puntos: 14, posicion: 6,
//   },
//   {
//     nombre: "Madagascar", jugados: 11, ganados: 3, empates: 2, derrotas: 6, puntos: 11, posicion: 7,
//   },
//   {
//     nombre: "Viejo estado", jugados: 11, ganados: 1, empates: 5, derrotas: 5, puntos: 8, posicion: 8,
//   },
// ]

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

tablaEquipos(equipos)
   
const formulario = document.getElementById("miFormulario")

formulario.addEventListener("submit", function (event) {
    event.preventDefault()

    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value
    const equipoInscripto = document.getElementById("equipo").value
    const datosEquipo = {nombre, email, equipoInscripto}

    localStorage.setItem ("nuevoEquipo", JSON.stringify(datosEquipo))
    formulario.reset()
})

let contenedorTarjetas = document.getElementById("productos-container")

function tarjetasPremios (productos){
  productos.forEach(premio => {
    const nuevoPremio = document.createElement("div")
    nuevoPremio.classList = "card-producto"
    nuevoPremio.innerHTML = `
      <img src="./assets/vouchers/${premio.id}.png">
    `
    contenedorTarjetas.appendChild(nuevoPremio)
  })
}

tarjetasPremios(premios)

