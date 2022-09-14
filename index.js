/* Parámetros por defecto
Los parametros por defecto consisten en establecer un valor por defecto a los parámetros de una
función, para asegurar que el codigo se ejecute  correctamete en caso de que no se estabelzcan
los argumetos correspondientes en la invocacion de la funcion. 
*/

//Antigua Forma
function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

newFunction('carlos', 24, 'mX');

//Nueva forma ES6

function newFunction2(name = 'Oscar', age = 32, country = 'MX'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 23, 'CO');

/*Plantillas literales
Las plantillas literales (template literals) consisten en crear cadenas de caracteres que puedan contener
variales.

Antes se ocupaban concatenación pero esto causaba problemas de legibilidad y manteniminto de codigo 
*/

//Antigua Forma

let hello = 'Hello';
let world = 'World';
let phrase = hello + ' ' + world;

console.log(phrase);

// Nueva Forma ES6

let phrase2 = `${hello} ${world}`;
console.log(phrase2);


/*Plantilla Multilinea
La plantilla multilinea consiste en crear mensajes que contengan varias lineas separadas entre si,
utilizando las plantillas literales.

Antes de ES6, la forma era agregar \n al string.
*/

//Forma antigua
var mensaje = "Línea 1\n" + "Línea 2"

console.log(mensaje);

//Nueva Forma ES6

const mensaje2 = `Línea1
Línea2`;

console.log(mensaje2);

/*Desestructuración
La desestructuración (destructuring) consiste en extraer los valores de arrays o propiedades de 
objetos en distintas variables.

La desestructuracion de objetos consiste en extraer  las propiedades de un objeto en variables, utilizando el 
mismo nombre de ka propiedad en ek objeto

Antes de ES6, necesitabas aceder alobjeto con la notacion de punto o corchete por cada propiedad que se necesitaba
y asignar ese valor a unavariable diferente.
*/

//Antigua Forma

var usuario = {nombre: "Andres", edad: 23, plataforma: "Platzi"}

var nombre = usuario.nombre;
var edad = usuario.edad;
var plataforma = usuario["plataforma"];

console.log(nombre);
console.log(edad);
console.log(plataforma);

//Nueva Forma ES6

const usuario2 = {nombre: "Andres", edad: 23, plataforma: "Platzi"}

const {nombre, edad, plataforma} = usuario2;

console.log(nombre);
console.log(edad);
console.log(plataforma);

/*Operador de propagación 
El operador de propagación (spread operator), como su nombre lo dice, 
consiste en propagar los elementos de un iterable, ya sea un array o string
 utilizando tres puntos (...) dentro de un array.
*/

// Para strings
const array = [ ..."Hola"]    // [ 'H', 'o', 'l', 'a' ]

// En arrays
const otherArray = [ ...array]   //[ 'H', 'o', 'l', 'a' ]

/*Unir arrays y añadir elementos con el operador de propagación
Para unir dos arrays con el operador de propagación, simplemente debes separarlos por comas en un array.*/

const array1 = [1,2,3]
const number = 4
const array2 = [5,6,7]

const otherArray2 = [ ...array1, number, ...array2 ]

otherArray2// [1,2,3,4,5,6,7]