/*
    MARK: EJERCICIOS CLASE 1

    *   Crear un formulario de datos personales
    *   Agregar CSS necesario para dar 2 estilos al formulario (normal y uno de "Alto Contraste")
    *   Agregar atributos a inputs del formulario para campos obligatorios
    *   Validar inputs del usuario en este formulario
*/

function checkForm() {
    const NAME = document.getElementById("formName");
    const SURNAME = document.getElementById("formSurname");
    const EMAIL = document.getElementById("formEmail");
    const DATE_OF_BIRTH = document.getElementById("formDateOfBirth");
    const COUNTRY_OF_RESIDENCE = document.getElementById("formCountryOfResidence");

    //  Intencionalmente evito un early return para avisar al usuario de todos
    //  los errores al mismo tiempo en lugar del primero que se encuentre.

    //  Además, incluyo una condición extra para devolver error sii el campo
    //  en cuestión es obligatorio en el formulario (el atributo 'required')

    let ERROR = "¡UPS! Parece que los siguientes campos no tienen información válida:\n";

    if (NAME.value.trim() === "" && NAME.required)
        ERROR = ERROR.concat("\n* El campo 'Nombre' NO puede estar vacío.")
    
    if (SURNAME.value.trim() === "" && SURNAME.required)
        ERROR = ERROR.concat("\n* El campo 'Apellido' NO puede estar vacío.")
    
    if (EMAIL.value.trim() === "" && EMAIL.required)
        ERROR = ERROR.concat("\n* El campo 'Correo electrónico' NO puede estar vacío.")
    
    if (DATE_OF_BIRTH.value === "" && DATE_OF_BIRTH.required)
        ERROR = ERROR.concat("\n* El campo 'Fecha de nacimiento' NO puede estar incompleto.")
    
    if (COUNTRY_OF_RESIDENCE.value === "" && COUNTRY_OF_RESIDENCE.required)
        ERROR = ERROR.concat("\n* El campo 'País de residencia' necesita algún país indicado.")


    alert(ERROR);
    console.log(ERROR);
};

document.addEventListener("DOMContentLoaded", () => {
    const DEFAULT_STYLE_BUTTON = document.getElementById("styleDefault");

    DEFAULT_STYLE_BUTTON.addEventListener("click", () => {
        document.body.classList.remove("high_contrast")
    });

    const HIGH_CONTRAST_STYLE_BUTTON = document.getElementById("styleHighContrast");

    HIGH_CONTRAST_STYLE_BUTTON.addEventListener("click", () => {
        document.body.classList.add("high_contrast")
    });

    const SUBMIT_BUTTON = document.getElementById("formSubmit");

    SUBMIT_BUTTON.addEventListener("click", (event) => {
        event.preventDefault();
        checkForm();
    })
});