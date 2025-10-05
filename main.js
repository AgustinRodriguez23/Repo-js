
let torneo = ligaDelSur
let edicion = cuarta
    alert("Bienvenido a "+ torneo + "actualmente disputando la " + edicion +"edicion")
let jugador = prompt("Bienvenido a Liga del sur, ingresa tu nombre:")
let equipo = prompt("Equipo al que queres seguir:")
    alert("Hola, " + jugador + "!" + " estás siguiendo al equipo " + equipo)


const posiciones = [      
      { equipo: "Parma Sur", puntos: 30, ganados: 10, empates: 0, posición: 1 },
      { equipo: "Los Euca", puntos: 25, ganados: 8, empates: 1, posición: 2 },
      { equipo: "El rejunte", puntos: 20, ganados: 6, empates: 2, posición: 4}
    ];

    posiciones.push ({ equipo: "Fecha libre", puntos: 23, ganados: 7, empates: 2, posición: 3})

    for (const equipo of posiciones) {
    console.log(equipo)
    }




function sumarPuntos(ganados, empates) {
      return ganados *3 + empates;
    }

    console.log(sumarPuntos(10, 0))


function amonestaciones(numero) {
  let suspendido = (numero === 5)
  if (suspendido) {
    console.log("El jugador está suspendido.")
  } else {
    console.log("El jugador puede jugar la fecha con normalidad.")
  }

}
amonestaciones(5);    


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