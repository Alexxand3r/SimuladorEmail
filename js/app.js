'use strict';

//Variables

const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
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
  console.log(e.target.type);

  if (e.target.value.length > 0) {
    //  console.log(e.target.value);
  } else {
    // e.target.style.borderBottomColor = "red";
    //e.target.classList.add("agrego classes")
    e.target.classList.add('border', 'border-red-500');
    //llamo la función mostrarError
    mostrarError('Todos los campos son obligatorios ⚠');
  }
  if (e.target.type === 'email') {
    //console.log('ese email,hay q validarlo diferente');
    //expresión regular para validación PRO

    const er =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (er.test(e.target.value)) {
      console.log('El email  es valido');
    } else {
      console.log('El email no es valido ❌');
    }

    //validación solo con arroba (@).
    /*
    const resultado = e.target.value.indexOf('@');
    //console.log(resultado);
    if (resultado < 0) {
      mostrarError('El email no es valido ❌');
   
    }*/
  }
}

function mostrarError(mensaje) {
  const mensajeError = document.createElement('p');
  mensajeError.textContent = mensaje;
  mensajeError.classList.add(
    'border',
    'border-red-500',
    'background-red-100',
    'text-red-500',
    'rounded-lg',
    'text-center',
    'mt-5',
    'p-3',
    'error'
  );

  const errores = document.querySelectorAll('.error');
  if (errores.length === 0) {
    formulario.appendChild(mensajeError);
  }
}
