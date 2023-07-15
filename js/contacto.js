const btn = document.querySelector("#btnEnviar");

btn.addEventListener("click",function(e){
  e.preventDefault();
  const formulario= document.querySelector("#contact-form")
  const nombre = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const asunto = document.querySelector("#asunto").value;
  const mensaje = document.querySelector("#mensaje").value;

  window.location.href = `mailto:trujillosanchezgianina@gmail.com?subject=envioDesdeFormulario&body=Nombre%3A${nombre}%0AEmail%3A${email}%0AAsunto%3A${asunto}%0AMensaje%3A${mensaje}`
})