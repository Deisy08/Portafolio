const inputs = document.querySelectorAll('input');
const $form = document.querySelector('.contact-form');

inputs.forEach((input) => {
   input.addEventListener('blur', (input) => {
    valida(input.target)
   })
})

function valida(input) {
    const tipoDeInput = input.dataset.tipo;
  
    if (input.validity.valid) {
		input.parentElement.classList.remove("container--invalid");
		input.parentElement.querySelector(".mensaje-error").innerHTML = "";
    } else {
		input.parentElement.classList.add("container--invalid");
		input.parentElement.querySelector(".mensaje-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}
  
const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];
  
const mensajesDeError = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío",
      patternMismatch: "El campo nombre no puede haber números.",
    },
    email: {
      valueMissing: "El campo correo no puede estar vacío",
      typeMismatch: "El correo no es válido",
      patternMismatch: "En este campo no te olvides de poner el @.",
    },
    asunto: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch: "El campo puede contener de 5 a 50 caracteres.",
    },
    message: {
      valueMissing: "Este campo no puede estar vacío",
    }
}

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}


document.addEventListener("DOMContentLoaded",(e)=>{
  loader()
})

function loader(){
  document.addEventListener("submit", (e)=>{
  e.preventDefault()
      alert("enviando formulario")

      const $loader = document.querySelector(".contact-form-loader")
       $response = document.querySelector(".contact-form-response")

      $loader.classList.remove("none") 

      setTimeout(()=>{
          $loader.classList.add("none") 
          $response.classList.remove("none") 
          $form.reset();

          setTimeout(()=> $response.classList.add("none"),3000 )
      },3000)
  })
}