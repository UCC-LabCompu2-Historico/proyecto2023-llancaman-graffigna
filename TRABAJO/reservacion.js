/**
 * Ejecuta una función cuando el contenido del documento ha sido completamente cargado.
 * @method addEventListener
 * @param {string} evento - El evento al que se va a suscribir ("DOMContentLoaded" en este caso).
 * @param {function} callback - La función que se ejecutará cuando se dispare el evento.
 */
document.addEventListener("DOMContentLoaded", function () {
    /**
     * Obtiene el elemento del documento con el ID "miFormulario".
     * @method getElementById
     * @param {string} id - El ID del elemento a buscar ("miFormulario" en este caso).
     * @return {object} Retorna el elemento del documento con el ID especificado.
     */
    let formulario = document.getElementById("miFormulario");

    /**
     * Obtiene el elemento del documento con el ID "telefono".
     * @method getElementById
     * @param {string} id - El ID del elemento a buscar ("telefono" en este caso).
     * @return {object} Retorna el elemento del documento con el ID especificado.
     */
    let telefonoInput = document.getElementById("telefono");

    /**
     * Obtiene el elemento del documento con el ID "nombre".
     * @method getElementById
     * @param {string} id - El ID del elemento a buscar ("nombre" en este caso).
     * @return {object} Retorna el elemento del documento con el ID especificado.
     */
    let nombreInput = document.getElementById("nombre");

    /**
     * Escucha el evento de envío del formulario y realiza validaciones.
     * @method addEventListener
     * @param {string} evento - El evento al que se va a suscribir ("submit" en este caso).
     * @param {function} callback - La función que se ejecutará cuando se dispare el evento.
     */
    formulario.addEventListener("submit", function (event) {
        if (formulario.checkValidity()) {
            /**
             * Obtiene el valor del campo de entrada de teléfono.
             * @property value
             * @type {string} Valor actual del campo de entrada.
             */
            let telefono = telefonoInput.value;

            /**
             * Obtiene el valor del campo de entrada de nombre.
             * @property value
             * @type {string} Valor actual del campo de entrada.
             */
            let nombre = nombreInput.value;

            if (!esNombreValido(nombre)) {
                event.preventDefault();
                alert("El nombre debe contener solo letras.");
                nombreInput.focus();
            } else if (!esNumeroTelefono(telefono)) {
                event.preventDefault();
                alert("El número de teléfono debe contener solo números.");
                telefonoInput.focus();
            } else {
                alert("Gracias por completar el formulario");
                formulario.reset();
            }
        }
    });

    /**
     * Verifica si un campo dado consiste únicamente en dígitos numéricos.
     * @method esNumeroTelefono
     * @param {string} numero - El número a verificar.
     * @return {boolean} Retorna true si el número consiste únicamente en dígitos numéricos, de lo contrario retorna false.
     */
    function esNumeroTelefono(numero) {
        let nume = /^[0-9]+$/;
        return nume.test(numero);
    }

    /**
     * Verifica si un campo dado consiste únicamente en letras.
     * @method esNombreValido
     * @param {string} nombre - El nombre a verificar.
     * @return {boolean} Retorna true si el nombre consiste únicamente en letras, de lo contrario retorna false.
     */
    function esNombreValido(nombre) {
        let letras = /^[A-Za-z]+$/;
        return letras.test(nombre);
    }
});
