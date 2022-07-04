'use strict';

//Variables

const btnEnviar = document.querySelector('#enviar');

//Variables para campos

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

eventListeners();

function eventListeners() {
  //arrancando la app

  document.addEventListener('DOMContentLoaded', iniciarApp);

  //campos del formulario
  email.addEventListener('blur', validarFormulario);
  asunto.addEventListener('blur', validarFormulario);
  mensaje.addEventListener('blur', validarFormulario);
}

//Funciones

function iniciarApp() {
  btnEnviar.disabled = true;
  btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

//valida el formulario

function validarFormulario(e) {
  if (e.target.value.length > 0) {
    console.log(e.target.value);
  } else {
    // e.target.style.borderBottomColor = "red";
    //e.target.classList.add("agrego classes")
    e.target.classList.add('border', 'border-red-500');
    //llamo la funcion mostrarError
    mostrarError();
  }
}

function mostrarError() {
  const mensajeError = document.createElement('p');
  mensajeError.textContent = 'todos los campos son obligatorios';
}
