/*
    MARK: EJERCICIOS CLASE 1

    *   Crear un formulario de datos personales
    *   Agregar CSS necesario para dar 2 estilos al formulario (normal y uno de "Alto Contraste")
    *   Agregar atributos a inputs del formulario para campos obligatorios
    *   Validar inputs del usuario en este formulario
*/

document.addEventListener("DOMContentLoaded", () => {
    const DEFAULT_STYLE_BUTTON = document.getElementById("styleDefault");

    DEFAULT_STYLE_BUTTON.addEventListener("click", () => {
        document.body.classList.remove("high_contrast")
    });

    const HIGH_CONTRAST_STYLE_BUTTON = document.getElementById("styleHighContrast");

    HIGH_CONTRAST_STYLE_BUTTON.addEventListener("click", () => {
        document.body.classList.add("high_contrast")
    });
});