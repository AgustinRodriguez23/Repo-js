
function agregarAlCarrito(producto) {
    const carrito = JSON.parse(localStorage.getItem("premios")) || []
    const nuevoCarrito = carrito
    if(!carrito){
        const nuevoProducto = uevoProductoParaCarrito(producto)
        localStorage.setItem("premios",JSON.stringify((nuevoProducto)))
        console.log(nuevoProducto)
    } else {
        const indiceProducto = carrito.findIndex(premio => premio.id === producto.id)
        console.log(indiceProducto)
     if(indiceProducto === -1){         
            nuevoCarrito.push(nuevoProductoParaCarrito(producto))
        } else {
            nuevoCarrito[indiceProducto].cantidad ++
        }       
            localStorage.setItem("premios",JSON.stringify(nuevoCarrito))
    }
    numeroCarrito()
}

function nuevoProductoParaCarrito(producto){
    const nuevoProducto = producto
    nuevoProducto.cantidad = 1
    return nuevoProducto
}

const cuentaPremios = document.getElementById("cuenta-premios")
function numeroCarrito(){
    const carrito = JSON.parse(localStorage.getItem("premios"))
    const cuenta = carrito.reduce((acum, current) => acum+current.cantidad,0)
    cuentaPremios.innerText = cuenta
}

numeroCarrito()