//Formas de seleccionar contenido
//QuerySelector: ya sea ninguno o hasta un elemento (0-1)

// const heading = document.querySelector('.header__texto h2'); con clases
const heading = document.querySelector('#headingBC'); 
//console.log(heading);
heading.classList.add('Nueva-clase');

//QuerySelectorAll: retorna de 0 a todos los elementos que concuerden con el selector
const enlaces = document.querySelectorAll('.navegacion a');
//console.log(enlaces[0]);
// enlaces[0].textContent = 'Google';
// enlaces[0].href = 'https://www.google.com/?hl=es';
//enlaces[0].remove('navegacion__enlace');

//getElementByID
const heading2 = document.getElementById('headingBC')
//console.log(heading2);
//************************************ */
//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');
// agregar href
nuevoEnlace.href = 'nuevo-enlace.html';
//Agregar el texto
nuevoEnlace.textContent = 'New link';
//Agrega clase
nuevoEnlace.classList.add('navegacion__enlace');

//Agregarlo al documento
const nav = document.querySelector('.navegacion');
nav.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

function imprimir(num){
    console.log(num);
}
//EVENTOS
// console.log(1);
 
// window.addEventListener('load', imprimir(55));
// //Otra forma de hacerlo es, solo cambia la sintaxis.
// window.onload = function(){
//     console.log(3);
// }

//  document.addEventListener('DOMContentLoaded', function(){ //Este solo espera a que se descarge el html
//     console.log(4);
// })
// console.log(5);

//Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();
//     console.log('Enviando formulario');
// });


//Eventos de inputs/ textArea

const datos = {
    name_a: '',
    email:'',
    mjs:''
}

const uName = document.querySelector('#name_a');
const mail = document.querySelector('#email');
const mjs = document.querySelector('#mjs');
const formulario = document.querySelector('.formulario');

uName.addEventListener('input', leerTexto);
mail.addEventListener('input', leerTexto);
mjs.addEventListener('input', leerTexto);

formulario.addEventListener('submit', function (evento){  //Evento del submit, se usa para formularios.
    evento.preventDefault();
    // validar form
    const { name_a, email, mjs} =  datos;
    if(name_a === ''|| email === '' || mjs === ''){
        envioAlerta('Debe llenar todos los campos','error');
    }else{
        envioAlerta("Mensaje enviado correctamente", "eCorrecto");
    }
     

    //enviar form
    
});

function leerTexto(event){
    // console.log(event.target.value);
    datos[event.target.id] = event.target.value;
    // console.log(datos);
}
//Muestra error en pantalla
function envioAlerta(mensaje, cssClass){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add(cssClass);
    formulario.appendChild(alerta);
    //Para que desaparezca
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

