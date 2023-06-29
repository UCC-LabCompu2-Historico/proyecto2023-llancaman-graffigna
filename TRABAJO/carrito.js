/**
 * Arreglo que representa el carrito de compras.
 * @var {Array} carrito - El carrito de compras.
 */
let carrito = [];

/**
 * Variable que almacena el total de la compra.
 * @var {number} total - El total de la compra.
 */
let total = 0;

/**
 * Agrega un producto al carrito de compras.
 * @method agregarAlCarrito
 * @param {string} nombre - El nombre del producto a agregar.
 * @param {number} precio - El precio del producto a agregar.
 */
function agregarAlCarrito(nombre, precio) {
    if (carrito.length >= 6) {
        alert("No puedes agregar más de 6 productos al carrito.");
        return;
    }

    carrito.push({nombre, precio});
    total += precio;
    actualizarCarrito();
}

/**
 * Actualiza el contenido del carrito de compras en la página.
 * @method actualizarCarrito
 */
function actualizarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    const totalCarrito = document.getElementById("total-carrito");
    listaCarrito.innerHTML = "";

    carrito.forEach((item) => {
        const li = document.createElement("li");
        li.innerText = `${item.nombre} - Precio: $${item.precio.toFixed(2)}`;
        listaCarrito.appendChild(li);
    });

    totalCarrito.innerText = `$${total.toFixed(2)}`;
}

/**
 * Actualiza el contenido del ticket con la información del carrito.
 * @method actualizarTicket
 */
function actualizarTicket() {
    const canvas = document.getElementById("ticket");
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.font = "14px Arial";

    let yPos = 20;

    carrito.forEach((item) => {
        context.fillText(
            `${item.nombre} - Precio: $${item.precio.toFixed(2)}`,
            20,
            yPos
        );
        yPos += 20;
    });

    context.fillText(`Total: $${total.toFixed(2)}`, 20, yPos + 10);
}

/**
 * Vacía el carrito de compras, eliminando todos los productos y reiniciando el total.
 * @method vaciarCarrito
 */
function vaciarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
}

/**
 * Obtiene el elemento del botón de compra.
 * @method obtenerBotonCompra
 * @return {HTMLElement} - El elemento del botón de compra.
 */
const botonCompra = document.getElementById("boton-compra");

/**
 * Agrega un evento de clic al botón de compra para realizar acciones cuando se presiona.
 * @method agregarEventoClickBotonCompra
 */
botonCompra.addEventListener("click", function () {
    if (carrito.length < 1) {
        alert("Debes agregar al menos 1 producto al carrito.");
        return;
    }

    botonCompra.classList.add("animacion");
    actualizarTicket();
    carrito = [];
    total = 0;
    actualizarCarrito();
});

/**
 * Obtiene los elementos de los botones de productos.
 * @method obtenerBotonesProductos
 * @return {NodeList} - Los elementos de los botones de productos.
 */
const botonesProductos = document.querySelectorAll(".boton-producto");

/**
 * Agrega un evento de clic a cada botón de producto para realizar acciones cuando se presiona.
 * @method agregarEventoClickBotonesProductos
 */
botonesProductos.forEach((boton) => {
    boton.addEventListener("click", function () {
        const nombre = boton.getAttribute("data-nombre");
        const precio = parseFloat(boton.getAttribute("data-precio"));

        agregarAlCarrito(nombre, precio);
    });
});
