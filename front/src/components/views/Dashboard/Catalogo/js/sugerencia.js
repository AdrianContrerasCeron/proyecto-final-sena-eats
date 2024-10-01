let productosEnSugerencia = localStorage.getItem("productos-en-sugerencia");
productosEnSugerencia = JSON.parse(productosEnSugerencia);

const contenedorSugerenciaVacio = document.querySelector("#sugerencia-vacio");
const contenedorSugerenciaProductos = document.querySelector("#sugerencia-productos");
const contenedorSugerenciaAcciones = document.querySelector("#sugerencia-acciones");
const contenedorSugerenciaSugerida = document.querySelector("#sugerencia-sugerida");
let botonesEliminar = document.querySelectorAll(".sugerencia-producto-eliminar");
const botonVaciar = document.querySelector("#sugerencia-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonSugerir = document.querySelector("#sugerencia-acciones-sugerir");


function cargarProductosSugerencia() {
    if (productosEnSugerencia && productosEnSugerencia.length > 0) {

        contenedorSugerenciaVacio.classList.add("disabled");
        contenedorSugerenciaProductos.classList.remove("disabled");
        contenedorSugerenciaAcciones.classList.remove("disabled");
        contenedorSugerenciaSugerida.classList.add("disabled");
    
        contenedorSugerenciaProductos.innerHTML = "";
    
        productosEnSugerencia.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("sugerencia-producto");
            div.innerHTML = `
                <img class="sugerencia-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="sugerencia-producto-titulo">
                    <small>Título</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="sugerencia-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="sugerencia-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="sugerencia-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>
                <button class="sugerencia-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;

            contenedorSugerenciaProductos.append(div);
        })
    
    } else {
        contenedorSugerenciaVacio.classList.remove("disabled");
        contenedorSugerenciaProductos.classList.add("disabled");
        contenedorSugerenciaAcciones.classList.add("disabled");
        contenedorSugerenciaSugerida.classList.add("disabled");
    }
    
    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarProductosSugerencia();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".sugerencia-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDeSugerencia);
    });
}

function eliminarDeSugerencia(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnSugerencia.findIndex(producto => producto.id === idBoton);
    
    productosEnSugerencia.splice(index, 1);
    cargarProductosSugerencia();
    
    localStorage.setItem("productos-en-sugerencia", JSON.stringify(productosEnSugerencia));
    
}

botonVaciar.addEventListener("click", vaciarSugerencia);
function vaciarSugerencia() {

    productosEnSugerencia.length = 0;
    localStorage.setItem("productos-en-sugerencia", JSON.stringify(productosEnSugerencia));
    cargarProductosSugerencia();

}


function actualizarTotal() {
    const totalCalculado = productosEnSugerencia.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}



botonSugerir.addEventListener("click", sugerirSugerencia);
function sugerirSugerencia() {

    productosEnSugerencia.length = 0;
    localStorage.setItem("productos-en-sugerencia", JSON.stringify(productosEnSugerencia));
    
    contenedorSugerenciaVacio.classList.add("disabled");
    contenedorSugerenciaProductos.classList.add("disabled");
    contenedorSugerenciaAcciones.classList.add("disabled");
    contenedorSugerenciaSugerida.classList.remove("disabled");
}

