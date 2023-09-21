"use strict";
let cadMeses = "ENERO-FEBRERO-MARZO-ABRIL-MAYO-JUNIO"
let myArray = cadMeses.split("-");
console.log(myArray);

//Buscar elementos en un arreglo sino lo encuentra devuelve undefined
const busqueda = myArray.find((e)=> e ==="FEBRERO");
console.log(busqueda);
//2. Buscar por indice sino lo encuentra devuelve -1
const indice = myArray.findIndex((e)=>
    e === "MAYO"
);
console.log(indice);
//3.Crea un objeto iterable
 const array =[3,4,5,6,8,9];
 const arrayCuadrados = Array.from(array,(e)=> e * e);
 console.log(typeof(arrayCuadrados));
 console.log(arrayCuadrados);
 //4. filtrar  
 const result= array.filter((e)=> e %3 === 0);
 console.log(result);