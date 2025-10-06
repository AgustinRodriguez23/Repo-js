
let torneo = prompt("Ingresa nombre del torneo")

    alert("Bienvenido al torneo "+ torneo + " actualmente disputando la cuarta edicion")
let jugador = prompt("Ingresa tu nombre:")
let equipo = prompt("Equipo al que queres seguir:")
    alert("Hola, " + jugador + "!" + " estás siguiendo al equipo " + equipo)

const equipos = ['Parma Sur', 'Los Euca', 'El rejunte', 'Torino', 'Magios', 'Alvarado Fc', 'Madagascar', 'Viejo estado']
console.log(equipos)

equipos.push ('Fecha libre')

for (const equipo of equipos) {
console.log(equipo)
}


  let suspendido = prompt("Ingrese numero de tarjetas")
  if (suspendido == 5) {
   console.log("El jugador está suspendido.")
  } else {
    console.log("El jugador puede jugar la fecha con normalidad.")
  }


function sumarPuntos(ganados, empates) {
      return ganados *3 + empates;
    }

let puntos = (sumarPuntos(10, 0))
console.log(puntos)




function premiosTorneo(posición){
    let campeon = (posición === 1)
    if (campeon) {
        console.log("juego de 15 camisetas, cena para el equipo e reinscripcion gratuita");
    } else if (posición === 2) {
      console.log("juego de 12 shorts personalizados y pack de 12 cervezas");
    }  else {
        console.log("medalla de participacion");
    }   
}

premiosTorneo(2)