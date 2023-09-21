 'use strict';
 //1. Pedir dos números positivos y realizar una suma retornar el valor
 //ds: suma
 //de: son 2 numeros positivos
 const sumar =(num1,num2) =>{
    const response = (num1>0 && num2 >0) ? num1+num2 : "No se puede realizar la suma";
    console.log(response);
    return response;}
 let numero1= parseFloat (prompt ('Dame el primer valor:'));
 let numero2=parseFloat(prompt ('Dame el segundo valor:'));
 let suma = sumar (numero1,numero2);
 alert(sumar);
 
 
