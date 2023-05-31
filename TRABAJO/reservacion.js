/**
 * Agrega un evento de escucha al formulario para prevenir el comportamiento predeterminado de envío.
 * @method agregarEventoSubmitFormulario
 * @param {Event} event - El evento de envío del formulario.
 * @return {void}
 */

document
  .getElementById("miFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    /**
     * Obtiene los valores de los campos del formulario.
     * @method obtenerValoresFormulario
     * @return {void}
     */

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var Hora = document.getElementById("Hora").value;

    /**
     * Realiza la validación de los campos del formulario y muestra un mensaje correspondiente.
     * @method validarFormulario
     * @return {void}
     */

    if (Hora && nombre && email && validarTelefono(telefono)) {
      mostrarMensaje("¡Muchas gracias por completar el formulario!");
      document.getElementById("miFormulario").reset();
      document.getElementById("telefono").classList.remove("invalido");
    } else {
      mostrarMensaje(
        "Por favor, completa todos los campos del formulario correctamente."
      );
      document.getElementById("telefono").classList.add("invalido");
    }
  });

/**
 * Asocia un evento de entrada al elemento con ID "telefono" para validar el número de teléfono ingresado.
 * @method eventListenerTelefono
 * @return {void}
 */

document.getElementById("telefono").addEventListener("input", function () {
  var telefono = this.value;
  if (validarTelefono(telefono)) {
    this.classList.remove("invalido");
  } else {
    this.classList.add("invalido");
  }
});

/**
 * Muestra un mensaje en un elemento específico.
 * @method mostrarMensaje
 * @param {string} mensaje - El mensaje que se mostrará.
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

/**
 * Valida un número de teléfono de 10 dígitos.
 * @method validarTelefono
 * @param {string} telefono - El número de teléfono a validar.
 * @return {boolean} - Devuelve true si el número de teléfono es válido, de lo contrario devuelve false.
 */

function validarTelefono(telefono) {
  var patron = /^\d{10}$/;
  return patron.test(telefono);
}
