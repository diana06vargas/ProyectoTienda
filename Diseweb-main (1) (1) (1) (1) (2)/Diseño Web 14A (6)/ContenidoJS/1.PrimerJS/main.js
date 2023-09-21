//comentarios en linea
/**
 * comentarios en bloque
 * JavaScript es un lengiaje de programación en el cliente
 * Es de sintaxis flexible*/
//directiva para trabajar en modo estricto
'use strict'; 
//declaracion de variables
var number1=10; //contenedor de caracter global
let number2=5; //contenedor de caracter local
const IVA_19 = 19; //contenedor para constantes

var number1=1; //no usar var 
console.log(number1)
//operadores aritmeticos + - * / division %modulo
let suma = number1 + number2;
let resta = number1 - number2;
let multiplicacion = number1*number2;
let division= number1/number2;
let modulo= number1%number2;
console.log("suma"+suma,"resta"+resta,multiplicacion,division, modulo)
//operadores logicos
let resultado = number1 > number2;
let menor= number1<=number2;
let number3 = '4';
let number4 = 4;
let comparacion1 = number3==number4; // no estricto
let comparacion2 = number3 === number4; // estricto

console.log("******************");
console.log("Comparacion 1:"+comparacion1);
console,log("Comparacion 2:"+comparacion2);