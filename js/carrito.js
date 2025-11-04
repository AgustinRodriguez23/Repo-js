
const contenedorVouchers = document.getElementById("productos-container")
const unidadesElement = document.getElementById("unidades")
const carritoVacio = document.getElementById("carrito-vacio")
const reiniciarCarritoButton = document.getElementById("reiniciar")

function tarjetasPremios (){
    contenedorVouchers.innerHTML = ""
    const productos = JSON.parse(localStorage.getItem("premios"))
    console.log(productos)
    if (productos && productos.length > 0) {
    productos.forEach(premio => {
    const nuevoPremio = document.createElement("div")
    nuevoPremio.classList = "card-producto"
    nuevoPremio.innerHTML = `
        <img src="../assets/vouchers/${premio.id}.png">
        <h3>${premio.titulo}</h3>
        <div>
        <button class="boton-carrito">-</button>
        <span class="cant">${premio.cantidad}</span>
        <button class="boton-carrito">+</button>
        </div>
    `
    contenedorVouchers.appendChild(nuevoPremio)
    nuevoPremio
    .getElementsByTagName("button")[1].addEventListener("click",(e)=> {        
        const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0]
        cuentaElement.innerText = agregarAlCarrito(premio)
        CurrentTotales()       
    })
    nuevoPremio
    .getElementsByTagName("button")[0].addEventListener("click",(e)=> {
        restarAlCarrito(premio)
        tarjetasPremios ()
        CurrentTotales()
    })
  })
 }
}

tarjetasPremios()
CurrentTotales()

function CurrentTotales() {
    const productos = JSON.parse(localStorage.getItem("premios"))
    let unidades = 0
    if(productos && productos.length >0){
        productos.forEach(producto =>{
            unidades += producto.cantidad
        })
        unidadesElement.innerText = unidades
    }
}

function CarritoVacio() {
    const productos = JSON.parse(localStorage.getItem("premios"))
    carritoVacio.classList.toggle("escondido",(productos && productos.length>0))
}

CarritoVacio()


reiniciarCarritoButton.addEventListener("click", reiniciarCarrito)
function reiniciarCarrito() {
    localStorage.removeItem("premios")
    CurrentTotales()
    tarjetasPremios ()
    location.reload()
}
