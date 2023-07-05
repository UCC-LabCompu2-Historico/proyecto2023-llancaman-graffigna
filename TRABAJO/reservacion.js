/**
 * Deshabilita el comportamiento predeterminado del envío del formulario y previene que la página se recargue.
 * @method prevenirEnvioFormulario
 */
document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault();

    /**
     * Obtiene los valores ingresados en los campos del formulario.
     * @method obtenerValoresFormulario
     * @return {Object} - Un objeto con las propiedades `nombre`, `email`,  `asunto` y `mensaje` que contienen los valores ingresados en los campos del formulario.
     */
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let tiempo = document.getElementById("time").value;
    let telefono = document.getElementById("telefono").value;

    /**
     * Valida y maneja el envío del formulario.
     * @method validarEnvioFormulario
     * @param {string} nombre - El nombre ingresado en el formulario.
     * @param {string} email - El correo electrónico ingresado en el formulario.
     * @param {string} tiempo - El asunto ingresado en el formulario.
     * @param {string} telefono - El mensaje ingresado en el formulario.
     */
    if (nombre && email && tiempo && telefono) {
        if (/^[a-zA-Z]+$/.test(nombre)) {
            if (/^[0-9]+$/.test(telefono)) {
                alert("¡Muchas gracias por completar el formulario!");
                document.getElementById("miFormulario").reset();
            } else {
                alert("Por favor, ingresa solo números en el campo telefono.");
            }
        } else {
            alert("Por favor, ingresa solo letras en el campo nombre.");
        }
    } else {
        alert("Por favor, completa todos los campos del formulario.");
    }
});
