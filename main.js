

const equipos = [
  {
    nombre: "Parma Sur", jugados: 11, ganados: 7, empates: 3, derrotas: 1, puntos: 24, posicion: 1,
  },
  {
    nombre: "Los Euca", jugados: 11, ganados: 6, empates: 3, derrotas: 2, puntos: 21, posicion: 2,
  },
  {
    nombre: "El rejunte", jugados: 11, ganados: 6, empates: 1, derrotas: 4, puntos: 19, posicion: 3,
  },
  {
    nombre: "Torino", jugados: 11, ganados: 5, empates: 3, derrotas: 3, puntos: 18, posicion: 4,
  },
  {
    nombre: "Magios", jugados: 11, ganados: 5, empates: 3, derrotas: 3, puntos: 18, posicion: 5,
  },
  {
    nombre: "Alvarado Fc", jugados: 11, ganados: 4, empates: 2, derrotas: 5, puntos: 14, posicion: 6,
  },
  {
    nombre: "Madagascar", jugados: 11, ganados: 3, empates: 2, derrotas: 6, puntos: 11, posicion: 7,
  },
  {
    nombre: "Viejo estado", jugados: 11, ganados: 1, empates: 5, derrotas: 5, puntos: 8, posicion: 8,
  },
]

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
    
  });
}

tablaEquipos(equipos)
   


const formulario = document.getElementById("miFormulario")

formulario.addEventListener("submit", function (event) {
    event.preventDefault()

    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value
    const equipoInscripto = document.getElementById("equipo").value

    const datosEquipo = {nombre, email, equipoInscripto}
    localStorage.setItem ("equipoConfirmado", JSON.stringify(datosEquipo))
    formulario.reset()
});






//console.log(equipos)
// for (const equipo of equipos) {}
//equipos.push ('Fecha libre')
//let inscribirEquipo = prompt("Inscribir equipo para proxima edicion. Nombre de equipo:")
//equipos.push (inscribirEquipo)


//for (const equipo of equipos) {
//console.log(equipo)
//}


//  let suspendido = prompt("Ingrese numero de tarjetas")
//  if (suspendido == 5) {
//   console.log("El jugador está suspendido.")
 // } else {
 //   console.log("El jugador puede jugar la fecha con normalidad.")
 // }


//let partidosGanados = parseInt(prompt("Ingrese numero de partidos ganados"))
//let partidosEmpate = parseInt(prompt("Ingrese numero de partidos empatados"))

//function sumarPuntos(ganados, empates) {
//      let puntosTotales = ganados *3 + empates
//      alert("Tu equipo tiene " + puntosTotales + " puntos")
 //   }
//
// sumarPuntos (partidosGanados, partidosEmpate)




//let posiciónFinal = parseInt(prompt("Ingrese posicion final para ver premios. (1,2,3,4)"))
//function premiosTorneo(posición){
//    let campeon = (posición === 1)
 //   if (campeon) {
 //       console.log("juego de 15 camisetas, cena para el equipo y reinscripcion gratuita");
 //   } else if (posición === 2) {
 //     console.log("juego de 12 shorts personalizados y pack de 12 cervezas");
  //  }  else {
 //       console.log("medalla de participacion");
  //  }   
//}

//premiosTorneo(posiciónFinal)

