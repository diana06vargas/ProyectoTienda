'use strict';
//Creación Elemento
const seccion = documento.createElement('section');
//Asignación de atributos al elemento
seccion.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, exercitationem doloribus voluptatem reprehenderit libero cupiditate quas tenetur? Ipsam quia omnis culpa, quaerat odit quidem laudantium illo magni pariatur eius voluptatem.";
seccion.id ="seccion3";
seccion.setAttribute("name","seccion3");
seccion.className ="seccion3";
seccion.style = "color: brown; font-size:26px"
//Insertar el elemento en el DOM
document.body.appendChild(seccion);
let seccion1 = document.getElementById('sec1');
seccion1.appendChild(seccion);
seccion.innerHTML = "<p><strong>Hola me cambiaron</strong></p>"; //Renderiza las etiquetas
seccion.textContent ="<p><strong>Hola me cambiaron</strong></p>";
seccion.innerHTML = "<p><strong><i>Hola</i> me cambiaron</strong></p>";

