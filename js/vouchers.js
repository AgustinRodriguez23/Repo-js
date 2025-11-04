
function agregarAlCarrito(producto) {
    const carrito = JSON.parse(localStorage.getItem("premios")) || []
    const nuevoCarrito = carrito
    let cuenta = 0
    if(!carrito){
        const nuevoProducto = uevoProductoParaCarrito(producto)
        localStorage.setItem("premios",JSON.stringify((nuevoProducto)))
        cuenta = 1
    } else {
        const indiceProducto = carrito.findIndex(premio => premio.id === producto.id)
     if(indiceProducto === -1){         
            nuevoCarrito.push(nuevoProductoParaCarrito(producto))
            cuenta = 1
        } else {
            nuevoCarrito[indiceProducto].cantidad ++
            cuenta = nuevoCarrito[indiceProducto].cantidad
        }       
            localStorage.setItem("premios",JSON.stringify(nuevoCarrito))            
    }
    numeroCarrito()
    return cuenta
}

function restarAlCarrito(producto) {
    const carrito = JSON.parse(localStorage.getItem("premios")) 
    const indiceProducto = carrito.findIndex(premio => premio.id === producto.id)
    if(carrito[indiceProducto].cantidad === 1){
        carrito.splice(indiceProducto,1)       
    } else {
        carrito[indiceProducto].cantidad--       
    }
    localStorage.setItem("premios",JSON.stringify(carrito))
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