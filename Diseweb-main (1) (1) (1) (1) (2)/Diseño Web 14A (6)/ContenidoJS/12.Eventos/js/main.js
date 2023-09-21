'use strict';
//Evento metodo en la etiqueta
const capturaClick = () => {
    alert ('Evento click');

}
const capturaMouseOver = () => {
    console.log ('Mouse Over');
}

function teclaDown (){
    console.log('Presionando tecla');
}
//Generar eventos por propiedad
const foot =document.querySelector
('#footer');
foot.onclick =function(){
    console.log('On click en el footer');
    
}
//Generar evento por el metodo .addEventListener
const parrafo = document.getElementById('parrafo_1');
parrafo.addEventListener('click',(event)=>{
  console.log('click en el parrafo')
});