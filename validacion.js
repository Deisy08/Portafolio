const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('#mensaje');

inputs.forEach((input) => {
   input.addEventListener('blur', (input) => {
    valida(input.target)
   })
})

textarea.addEventListener('blur', (textarea) => {
  validando(textarea.target)
})

function valida(input) {
    const tipoDeInput = input.dataset.tipo;
  
    if (input.validity.valid) {
		input.parentElement.classList.remove("input-container--invalid");
		input.parentElement.querySelector(".input-mensaje-error").innerHTML = "";
    } else {
		input.parentElement.classList.add("input-container--invalid");
		input.parentElement.querySelector(".input-mensaje-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

function validando(textarea) {
  const tipoDeTextarea = textarea.dataset.tipo;

  if (textarea.validity.valid) {
    textarea.parentElement.classList.remove("textarea-container--invalid");
    textarea.parentElement.querySelector(".textarea-mensaje-erro").innerHTML = "";
  } else {
    textarea.parentElement.classList.add("textarea-container--invalid");
    textarea.parentElement.querySelector(".textarea-mensaje-erro").innerHTML = verMensajeDeError(tipoDeTextarea, textarea);
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
    },
    email: {
      valueMissing: "El campo correo no puede estar vacío",
      typeMismatch: "El correo no es válido",
    },
    asunto: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch: "El campo puede contener de 5 a 50 caracteres.",
    },
    mensaje: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch: "El campo mensaje puede contener desde 10 caracteres."
    }
};
  
function verMensajeDeError(tipoDeTextarea, textarea) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (textarea.validity[error]) {
        console.log(tipoDeTextarea, error);
        console.log(textarea.validity[error]);
        console.log(mensajesDeError[tipoDeTextarea][error]);
        mensaje = mensajesDeError[tipoDeTextarea][error];
      }
      
    });
    return mensaje;
}

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}
