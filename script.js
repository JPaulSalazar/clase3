/**
 * Ejercicio #3:
 * Usando querySelector y querySelectorAll
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas
 *
 * NOTA: no se puede modificar el codigo HTML de la pagina
 */

/*
  EJERCICIO A: --------------------------------------------
  
  Selecciona y console.log el <h3> que dice "Esto
  es una lista"
*/

const h3 = document.querySelector('h3');
console.log(h3);

/*
  EJERCICIO B: --------------------------------------------
  
  Selecciona y loguea el primer y el ultimo elemento
  de la lista
*/
const fisrtChild = document.querySelector('ul').firstElementChild;
console.log(fisrtChild);

const  lastChild = document.querySelector('ul').lastElementChild;
console.log(lastChild);

/*
  EJERCICIO C: --------------------------------------------
  
  Selecciona y loguea el input de tipo "email" del
  formulario
*/

const input = document.querySelectorAll('input');
console.log(input[2]);
/*
  EJERCICIO D: --------------------------------------------
  
  Selecciona y loguea la fila de la tabla que tiene "JavaScript"
*/

const tr = document.querySelectorAll('tr');
console.log(tr[2]);
/*
  EJERCICIO E: --------------------------------------------
  
  Selecciona y loguea la celda que dice CSS
*/

const td = document.querySelectorAll('td');
console.log(td[4]);
/*
  EJERCICIO F: --------------------------------------------
  
  Investiga un metodo de algun elemento y trae un ejemplo de
  para que lo usarias
*/

//insertBefore nos permite elegir un nodo del documento e incluir otro antes que él.

//html del ejemplo
<div>
  <p id="childElement">Un párrafo.</p>
</div>

// Crea un nuevo, elemento <span>
let sp = document.createElement("span");

// Obtener una referencia al elemento, de donde queremos insertar el elemento antes 
let p = document.getElementById("childElement");

// Obtener una referencia al nodo padre
let parentDiv = p.parentNode;

// Inserta un nuevo elemento en el DOM antes de p
parentDiv.insertBefore(sp, p);