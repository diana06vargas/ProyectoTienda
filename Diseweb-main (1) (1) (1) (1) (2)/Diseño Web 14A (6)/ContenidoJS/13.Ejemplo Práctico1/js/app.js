'use strict';
const envio = document.getElementById('enviar');
const listaNotas = document.getElementById('lista_Notas');
let btnpromedio;
const btnPromedio = document.createElement('button');
    btnPromedio.type = "button";
    btnPromedio.id = "Promediar";
envio.addEventListener('ckick', ()=>{
    let canNotas = document.getElementById('nota').value;
    cantNotas = parseInt(cantNotas,);
    if ((canNotas >=2) && (cantNotas <=10)){
        for(let i=0; i<canNotas; i++){
            const div = document.createElement('div');
            const input = document.createElement('input');
            input.setAttribute('type', 'number');
            input.id ="Valor_nota";
            input.min=0;
            input.max=5;
            input.step=0.1;
            div.appendChild(input);
            listaNotas.appendChild(div);

        
        }
        listaNotas.appendChild(btnPromedio);
    }

});

btnPromedio.onClick = function (){
    let arrayInput = document.querySelectorAll('#valor_nota');
    let promedio =0;
    arrayInput.forEach((e) =>{
        if(parseFloat(e.value)){
            promedio += parseFloat(e.value);
            
        }
    });
    promedio = promedio/arrayInput.length;
    alert(`El promedio es ${promedio}`);

}