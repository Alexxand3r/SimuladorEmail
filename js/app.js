'use strict';

//Variables

const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');
//Variables para campos

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

//expresión regular para validación de email

const er =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();
function eventListeners() {
  //arrancando la app

  document.addEventListener('DOMContentLoaded', iniciarApp);

  //campos del formulario

  email.addEventListener('blur', validarFormulario);
  asunto.addEventListener('blur', validarFormulario);
  mensaje.addEventListener('blur', validarFormulario);

  //reinicia formulario
  btnReset.addEventListener('click', resetForm);

  //Enviar mail

  formulario.addEventListener('submit', enviarEmail);
}

//Funciones

function iniciarApp() {}

//valida el formulario

function validarFormulario(e) {
  console.log(e.target.type);

  if (e.target.value.length > 0) {
    //Eliminar cartel errores
    const error = document.querySelector('p.error');
    if (error) {
      error.remove();
    }

    //  console.log(e.target.value);
    e.target.classList.remove('border', 'border-red-500');
    e.target.classList.add('border', 'border-green-500');
  } else {
    // e.target.style.borderBottomColor = "red";
    //e.target.classList.add("agrego classes")
    e.target.classList.remove('border', 'border-green-500');
    e.target.classList.add('border', 'border-red-500');

    //llamo la función mostrarError

    mostrarError('Todos los campos son obligatorios ⚠');
  }
  if (e.target.type === 'email') {
    //console.log('ese email,hay q validarlo diferente');

    //test da paso a la utilizacion de er
    if (er.test(e.target.value)) {
      //Eliminar cartel errores
      const error = document.querySelector('p.error');
      if (error) {
        error.remove();
      }

      e.target.classList.remove('border', 'border-red-500');
      e.target.classList.add('border', 'border-green-500');
      console.log('El email  es valido ✔');
    } else {
      console.log('El email no es valido ❌');
      e.target.classList.remove('border', 'border-green-500');
      e.target.classList.add('border', 'border-red-500');
      //llamo la función mostrarError
      mostrarError('El email no es valido ❌');
    }

    //validación solo con arroba (@).
    //indexOf va a buscar el arroba en string
    /*
    const resultado = e.target.value.indexOf('@');
    //console.log(resultado);
    if (resultado < 0) {
      mostrarError('El email no es valido ❌');
   
    }*/
  }
  if (er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
    +console.log('pasaste la validación ✔');
    btnEnviar.disabled = false;
    btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
  } else {
    console.log('hay campos por validar ⚠');
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

//Enviar el mail

function enviarEmail(e) {
  e.preventDefault();
  //console.log('enviando...');

  //mostrar spinner
  const spinner = document.querySelector('#spinner');
  spinner.style.display = 'flex';

  //ocultar spinner y mostrar mensaje
  setTimeout(() => {
    // console.log('esta función se ejecuta después de 3 segundos');
    //ocultar
    spinner.style.display = 'none';

    //mensaje
    const parrafo = document.createElement('p');
    parrafo.textContent = 'El mensaje se envió correctamente';
    parrafo.classList.add(
      'text-center',
      'my-10',
      'p-2',
      'bg-green-500',
      'text-white',
      'rounded-lg',
      'font-bold',
      'uppercase'
    );

    //inserta  primero mensaje luego spinner
    formulario.insertBefore(parrafo, spinner);

    //remover mensaje
    setTimeout(() => {
      parrafo.remove();
      resetForm();
    }, 4000);
  }, 2500);
}

// función resetear form
function resetForm() {
  formulario.reset();
  iniciarApp();
}
