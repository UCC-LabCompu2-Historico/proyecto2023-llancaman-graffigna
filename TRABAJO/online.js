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
 * @return {void}
 */

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

/**
 * Actualiza el contenido del carrito de compras en la página.
 * @method actualizarCarrito
 * @return {void}
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
 * @return {void}
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
 * @return {void}
 */

botonCompra.addEventListener("click", function () {
  botonCompra.classList.add("animacion");
  carrito = [];
  total = 0;
  actualizarCarrito();
  setTimeout(function () {
    mostrarMensajeCompra();
    botonCompra.classList.remove("animacion");
  }, 500);
});

/**
 * Obtiene el elemento del mensaje de compra.
 * @method obtenerMensajeCompra
 * @return {HTMLElement} - El elemento del mensaje de compra.
 */

const mensajeCompra = document.getElementById("mensaje-compra");

/**
 * Muestra el mensaje de compra en pantalla con animaciones.
 * @method mostrarMensajeCompra
 * @return {void}
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
