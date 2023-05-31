/**
 * Agrega un evento de envío al formulario para prevenir el comportamiento predeterminado.
 * @method agregarEventoEnvioFormulario
 * @param {Event} event - El evento de envío del formulario.
 * @return {void}
 */

document
  .getElementById("miFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    /**
     * Obtiene los valores ingresados en los campos del formulario.
     * @method obtenerValoresFormulario
     * @return {Object} - Un objeto con las propiedades `nombre`, `email` y `asunto` que contienen los valores ingresados en los campos del formulario.
     */

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;

    /**
     * Valida y maneja el envío del formulario.
     * @method validarEnvioFormulario
     * @param {string} nombre - El nombre ingresado en el formulario.
     * @param {string} email - El correo electrónico ingresado en el formulario.
     * @param {string} asunto - El asunto ingresado en el formulario.
     * @return {void}
     */

    if (nombre && email && asunto) {
      mostrarMensaje("¡Muchas gracias por completar el formulario!");
      document.getElementById("miFormulario").reset();
    } else {
      mostrarMensaje(
        "Por favor, completa todos los campos del formulario correctamente."
      );
    }
  });

/**
 * Muestra un mensaje en pantalla con animación.
 * @method mostrarMensaje
 * @param {string} mensaje - El mensaje a mostrar.
 * @return {void}
 */

function mostrarMensaje(mensaje) {
  var mensajeElemento = document.getElementById("mensaje");
  mensajeElemento.textContent = mensaje;
  mensajeElemento.classList.add("animacion");

  setTimeout(function () {
    mensajeElemento.classList.remove("animacion");
    mensajeElemento.textContent = "";
  }, 3000);
}
