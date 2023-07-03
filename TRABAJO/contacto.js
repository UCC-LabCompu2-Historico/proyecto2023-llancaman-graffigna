/**
 * Deshabilita el comportamiento predeterminado del envío del formulario y previene que la página se recargue.
 * @method prevenirEnvioFormulario
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
                alert("¡Muchas gracias por completar el formulario!");
                document.getElementById("miFormulario2").reset();
            } else {
                alert("Por favor, ingresa solo letras en el campo nombre.");
            }
        } else {
            alert(
                "Por favor, completa todos los campos del formulario correctamente."
            );
        }
    });
