// 1. Para trabajar un poco co n los métodos de arrays vamos a crear las siguientes funciones:
// a. Una función que reciba un array y devuelva otro que contenga todos los elementos mayores o iguales a 10.

const array = [1, 2, 5, 8, 10, 12, 25, 100, -1, -9, -202, 5555]

const mayoresA10 = (array) => {
    return array.filter((numeros) => numeros >= 10)
}
// resultado = mayoresA10(array)
// console.log(resultado)

//console.log(mayoresA10(array))

// b. Una función que reciba un array y retorne true si el array incluye el número 5 y false en caso contrario.

const hay5 = (array) => {
    return array.some((numeros) => numeros === 5)
}
//console.log(hay5(array))


// c. Una función que reciba un array y un número, la cual debe retornar un array con todos los elementos mayores o iguales a dicho número.
//const unNumero = 101
const mayorAlnumero = (array, unNumero) => {
    return array.filter((numeros) => numeros >= unNumero)
}
//console.log(mayorAlnumero(array, 101))

// d. Por último, una función que reciba un array y un número. Dicha función, debe retornar true en caso de que el número se encuentre en el array y false en caso contrario.

const ultimo = (array, unNumero) => {
    return array.includes(unNumero)
}
 //console.log(ultimo(array, 101))

// 2. Vamos a trabajar un poco con objetos, para este ejercicio usaremos un objeto de esta forma:

const usuario = {
    nombre: "luis",
    apellido: "miguel",
    edad: 25,
    cursos: ["Javascript basico"]
}
// a. Debemos crear una función que reciba a un usuario como parámetro y que retorne “Hola Luis Miguel sos mayor de edad”, en caso de que el usuario tenga al menos 18 años y “Hola Luis Miguel sos menor de edad” si el usuario tiene menos de 18 años. TIP: Quizás te sirva alguna de las funciones que creaste en ejercicios anteriores.

const validarEdad = (usuario) => {
    if (usuario.edad >= 18)
        return `Hola ${usuario.nombre} ${usuario.apellido} sos mayor de edad`;
        //return "Hola " + usuario.nombre + " " + usuario.apellido + " sos mayor"
        return "Hola " + usuario.nombre + " " + usuario.apellido + " sos menor"  
}
console.log(validarEdad(usuario))

// b. Ahora crearemos una función que reciba un usuario y un curso, y retorne el usuario con el nuevo curso. Por ejemplo si recibimos al usuario del ejemplo y el curso de “Introducción a las bases de datos”, la función debe retornar:
//const nuevoCurso = "intro"
const usuarioNuevoCurso = (usuario, nuevoCurso) => {
    usuario.cursos.push(nuevoCurso)
    return usuario
}
//console.log(usuarioNuevoCurso(usuario, "intro 2"))

