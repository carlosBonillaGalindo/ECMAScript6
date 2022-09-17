/*Métodos de transformación de objetos a arrays
Los métodos de transformación de objetos a arrays sirven para obtener la información de las propiedades, sus valores o ambas.

*/

/*Obtener los pares de valor de un objeto en un array
Object.entries() devuelve un array con las entries en forma [propiedad, valor] del objeto enviado como argumento. */

const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

Object.entries(usuario) 
/* 
[
  [ 'name', 'Andres' ],
  [ 'email', 'andres@correo.com' ],
  [ 'age', 23 ]
]  
*/

// Obtener las propiedades de un objeto en un array
// Object.keys() devuelve un array con las propiedades (keys) del objeto enviado como argumento.

const usuario2 = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

Object.keys(usuario2)  // [ 'name', 'email', 'age' ]


/**
 Obtener los valores de un objeto en un array
Object.values() devuelve un array con los valores de cada propiedad del objeto enviado como argumento.
 */

const usuario4 = {
    name: 'Andres',
    email: "andres@correo.com",
    age: 23
}

Object.values(usuario4) // [ 'Andres', 'andres@correo.com', 23 ]

/*
Cómo rellenar un string o padding
El padding consiste en rellenar un string por el principio o por el final, con el carácter especificado, repetido hasta que complete la longitud máxima.

Este método recibe dos argumentos:

-La longitud máxima a rellenar, incluyendo el string inicial.
-El string para rellenar, por defecto, es un espacio.
-Si la longitud a rellenar es menor que la longitud del string actual, entonces no agregará nada.

Método padStart
El método padStart completa un string con otro string en el inicio hasta tener un total de caracteres especificado.
*/
'abc'.padStart(10) // "       abc"
'abc'.padStart(10, "foo") // "foofoofabc"
'abc'.padStart(6,"123465") // "123abc"
'abc'.padStart(8, "0") // "00000abc"
'abc'.padStart(1) // "abc"

/*
Método padEnd
El método padEnd completa un string con otro string en el final hasta tener un total de caracteres especificado.
*/

'abc'.padEnd(10) // "abc       "
'abc'.padEnd(10, "foo") // "abcfoofoof"
'abc'.padEnd(6, "123456") // "abc123"
'abc'.padEnd(1) // "abc"

/*
Trailing commas
Las trailing commas consisten en comas al final de objetos o arrays que faciliten añadir nuevos elementos y evitar errores de sintaxis.
*/

const usuario3 = {
    name: 'Andres',
    email: "andres@correo.com",
    age: 23, //<-- Trailing comma
}

const nombres = [
    "Andres",
    "Valeria",
    "Jhesly", //<-- Trailing comma
 ]
