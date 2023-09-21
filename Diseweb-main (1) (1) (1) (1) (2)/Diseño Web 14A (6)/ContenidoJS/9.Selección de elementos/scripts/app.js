//Selección de elementos por id
const seccion1 = document.getElementById('sec1');
console.log(seccion1);
//seleccion de elementos por class
const mainContainer = document.getElementsByClassName('container_main');
console.log(mainContainer);
//seleccion de elementos por name
const articulos =document.getElementsByName('articulo');
//seleccion de elementos por id con queryselector
const seccion2 = document.querySelector('#sec2');
console.log(seccion2);
//seleccion por etiqueta
const titulo= document.querySelector('h1');
console.log(titulo);
//seleccion por class
const seccion2Class=document.querySelector('.seccion2');

const reciboDato = (e)=>{
    
    const texto= document.querySelector('#nombre').value;
    console.log(texto);
}