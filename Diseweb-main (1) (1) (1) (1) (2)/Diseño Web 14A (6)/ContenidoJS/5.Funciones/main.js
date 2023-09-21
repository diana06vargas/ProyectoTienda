'use strict';
//1.Función Clásica
function suma(num1,num2){
   return num1 + num2;
}
//Invocación de la función de la función
let respuesta = suma(4,6);
console.log(respuesta);
console.log(suma(3,8));
//2.Función tipo flecha
const restar =(num1,num2) =>{
   return (num1 - num2);
} 
console.log(restar(14,6));
