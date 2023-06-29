/**
 * Agrega un evento de envío al formulario para prevenir el comportamiento predeterminado.
 * @method agregarEventoEnvioFormulario
 * @param {Event} event - El evento de envío del formulario.
 */

document
    .getElementById("miFormulario2")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        /**
         * Obtiene los valores ingresados en los campos del formulario.
         * @method obtenerValoresFormulario
         * @return {Object} - Un objeto con las propiedades `nombre`, `email`,  `asunto` y `mensaje` que contienen los valores ingresados en los campos del formulario.
         */

        let nombre = document.getElementById("nombre").value;
        let mensaje2 = document.getElementById("mensaje2").value;
        let email = document.getElementById("email").value;
        let asunto = document.getElementById("asunto").value;

        /**
         * Valida y maneja el envío del formulario.
         * @method validarEnvioFormulario
         * @param {string} nombre - El nombre ingresado en el formulario.
         * @param {string} email - El correo electrónico ingresado en el formulario.
         * @param {string} asunto - El asunto ingresado en el formulario.
         * @param {string} mensaje - El mensaje ingresado en el formulario.
         */

        if (nombre && email && asunto && mensaje2) {
            if (/^[a-zA-Z]+$/.test(nombre)) {
                mostrarMensaje("¡Muchas gracias por completar el formulario!");
                document.getElementById("miFormulario2").reset();
            } else {
                alert("Por favor, ingresa solo letras en el campo nombre.");
            }
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
 */

function mostrarMensaje(mensaje) {
    let mensajeElemento = document.getElementById("mensaje3");
    mensajeElemento.textContent = mensaje;
    mensajeElemento.classList.add("animacion2");

    setTimeout(function () {
        mensajeElemento.classList.remove("animacion2");
        mensajeElemento.textContent = "";
    }, 3000);
}
