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


/*Paametros en objeto 
Son una funcion que cionsiste en crear objetos a partir de variables sin repetir su nombre como propiedad
*/

//Antigua Forma

const nombre = "Andres"
const edad = 23

const objeto = {
    nombre: nombre,
    edad: edad
}

//Nueva forma ES6

const objeto2 = {nombre, edad}

/*Arrow function
Consiste en una funcion anonima con la siguinete estructura 
*/

//Antigua forma

function nombre (parámetros){
    return(valorRetornado)
}

//Nueva Forma ES6

const nombre2 = (parámetros)=>{
    return (valorRetornado)
}

//Si existe un solo parámetro se puede omitir el parentesis

const porDos = num => num*2;



/*Retorno imprlicito
Se puede omitir la palabra reservada return y que el codigo sea esrito en una sola linea
*/

//Antigua forma

function suma (num1, num2){
    return num1 + num2;
}

//Arrow function ES6

const suma = (num1, num2) => num1 + num2;

//Si el retorno requiere de mas de una linea se pude envolver la instruccion en parentesis

const suma = (num1, num2) => (
    num1 + num2
)




/*Promesa
Una promesa es una forma de manejar el asincronismo en JavaScript.

Solamente ten presente que la clase Promise y sus métodos then y catch fueron añadidos en ES6, por un problema 
del manejo del asincronismo con funciones desencadenantes, llamado Callback Hell{target="_blank"}.
*/

const promesa = () => {
    return new Promise( (resolve, reject) => {
        if( something ){ 
            resolve( "Se ha resuelto la promesa" )
        }else {
            reject( "Se ha rechazado la promesa" )
        }
    });
}

promesa()
    .then( respuesta => console.log(respuesta) ) //En caso que se ejecute resolve
    .catch( error => console.log(error) ) //En caso que se ejecute reject
/* Clases 
La palabra reservada class es una forma para crear clases y manejar la herencia en JavaScript, permitiendo resolver
 problemas con el paradigma de programación orientada a objetos (POO).

La estructura de clases en JavaScript consiste en:

-Definir la clase con la palabra reservada class, seguido del nombre (por convención se empieza con mayúscula).
-La función constructora sirve para crear las variables necesarias en la instancia del objeto.
-Para definir atributos necesitas el contexto this, que representa la instancia del objeto.
-Métodos para definir las acciones de la clase.
-Para crear una instancia, deberás declarar una variable e invocar la clase con la palabra reservada new.

*/

class Calculator {
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }
    
    suma(num1, num2){
        this.valueA = num1
        this.valueB = num2
        return this.valueA + this.valueB
    }
}

// Instancia
const calculadora = new Calculator()

calculadora.suma(2,2) //4



/*Módulos ECMAScript
 ES6 introduce una forma de compartir código entre los archivos de manera modular. Esto involucra exportar 
 funciones o variables de un archivo, e importarlas en otros archivos donde se necesite.

 Para explicar cómo funciona las exportaciones e importaciones de código, debes tener mínimo dos archivos, 
 uno para exportar las funcionalidades y otro que las importe para ejecutarlas.
*/


/*Exportaciones
consisten en crear funciones o variables para utilizarlas en otros archivos mediante la palabra reservada export.
 Existen dos formas de exportar, antes de declarar la funcionalidad, o entre llaves {}.

Por ejemplo, en el archivo math_function.js declaramos una función para sumar dos valores, el cual lo exportaremos.
*/

//math_function.js
export const add = (x,y) => {
    return x + y
}
//math_function.js
const add = (x,y) => {
    return x + y
}

export { add, otherFunction}

/*Importaciones
Las importaciones de código consiste en usar funciones o variables de otros archivos mediante la palabra reservada import, 
que deberán estar siempre lo más arriba del archivo y utilizando el mismo nombre que el archivo original. 

Por ejemplo, importamos la función add del archivo math_function.js para utilizarla en un archivo main.js.

*/

// main.js
import { add, otherFunction } from './math_functions.js'

add(2,2) //4



/*Generadores
Los generadores son funciones que devuelven solamente valor en cada invocación.

Su sintaxis es la siguiente:

-La palabra reservada function* (con el asterisco al final).
-La palabra reservada yield que hace referencia al valor retornado cada vez que se invoque, recordando el valor anterior.
-Crear una variable a partir de la función generadora.
-El método next devuelve un objeto que contiene una propiedad value con cada valor de yield; y otra propiedad done con el 
valor true o false si el generador ha terminado.

Si el generador se lo invoca y ha retornado todos sus valores de yield, entonces devolverá el objeto con las propiedades 
value con undefined y un done con true.

*/

//Declaracion
function* generator(){
    yield 1
    yield 2
    yield 3
}

//Crear generador
const generador = generator()


//Invocaciones
generador.next().value //1
generador.next().value //2
generador.next().value //3
generador.next() // {value: undefined, done: true}