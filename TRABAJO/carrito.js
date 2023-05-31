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
  carrito.push({ nombre, precio });
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
const mensajeCompra = document.getElementById("mensaje-compra");
const ticketCanvas = document.getElementById("ticket");

/**
 * Obtiene el elemento del botón de compra.
 * @method obtenerBotonCompra
 * @return {HTMLElement} - El elemento del botón de compra.
 */

botonCompra.addEventListener("click", function () {
  botonCompra.classList.add("animacion");
  generarTicket();
  vaciarCarrito();
  setTimeout(function () {
    mostrarMensajeCompra();
    botonCompra.classList.remove("animacion");
  }, 500);
});

/**
 * Muestra el mensaje de compra en pantalla con animaciones.
 * @method mostrarMensajeCompra
 */

function mostrarMensajeCompra() {
  mensajeCompra.style.display = "block";
  mensajeCompra.style.top = "50%";

  setTimeout(function () {
    mensajeCompra.style.top = "-100%";
    setTimeout(function () {
      mensajeCompra.style.display = "none";
    }, 500);
  }, 2000);
}

/**
 * Genera un ticket donde especifica la compra realizada
 * @method: generarTicket
 */

function generarTicket() {
  const ctx = ticketCanvas.getContext("2d");
  ctx.clearRect(0, 0, ticketCanvas.width, ticketCanvas.height);
  ctx.font = "14px Times new roman";
  ctx.fillStyle = "#000";
  ctx.fillText("Ticket de Compra", 10, 20);

  let y = 40;
  carrito.forEach((item) => {
    ctx.fillText(`${item.nombre} - Precio: $${item.precio.toFixed(2)}`, 10, y);
    y += 20;
  });

  ctx.fillText(`Total: $${total.toFixed(2)}`, 10, y + 20);
}
