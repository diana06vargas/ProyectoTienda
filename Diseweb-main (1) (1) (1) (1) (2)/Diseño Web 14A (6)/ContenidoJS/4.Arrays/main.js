'use strict';
//Declarar un arreglo
const myArray1 =  [2,4,6,7,8,9,'3',true];
let myArray2 = new Array('1','2',3,4,5,6,7);
//For normal
for(let i=0; i<myarray1.length; i++){
    console.log(myArray1[1]);
 }

 // for in y for of
 for(let i in myArray2 ){
    console.log(myArray2[i]);
    //console.log(myArray2[i]);
 }
 for(let j of myArray2){
    console.log(i);
 }
 //for each
 myArray1.forEach(e =>{
    console.log(e);
 });