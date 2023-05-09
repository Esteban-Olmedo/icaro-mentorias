/*
1. Para trabajar un poco co n los métodos de arrays vamos a crear las
siguientes funciones:
a. Una función que reciba un array y devuelva otro que contenga todos
los elementos mayores o iguales a 10.
b. Una función que reciba un array y retorne true si el array incluye el
número 5 y false en caso contrario.
c. Una función que reciba un array y un número, la cual debe retornar un
array con todos los elementos mayores o iguales a dicho número.
d. Por último, una función que reciba un array y un número. Dicha
función, debe retornar true en caso de que el número se encuentre en
el array y false en caso contrario.
*/

const numeros = [1, 15, 10, 50, 25, 100, 5];

const eliminarMenoresADiez = (array) => {
  const nuevoArray = [];
  array.forEach((numero) => {
    if (numero >= 10) {
      nuevoArray.push(numero);
    }
  });
  return nuevoArray;
};

const eliminarMenoresADiezConFilter = (array) => {
  return array.filter((numero) => numero >= 10);
};

const incluyeCinco = (array) => {
  return array.some((numero) => numero === 5);
};

const incluyeCincoConIncludes = (array) => {
  return array.includes(5);
};

const eliminarMenoresAn = (array, n) => {
  return array.filter((numero) => numero >= n);
};

const incluyeAn = (array, n) => {
  return array.includes(n);
};

const y = 5;

incluyeAn(numeros, y);

console.log(incluyeAn(numeros, y));



/*
 Vamos a trabajar un poco con objetos, para este ejercicio usaremos un
objeto de esta forma:
a. Debemos crear una función que reciba a un usuario como parámetro y
que retorne “Hola Luis Miguel sos mayor de edad”, en caso de que el
usuario tenga al menos 18 años y “Hola Luis Miguel sos menor de
edad” si el usuario tiene menos de 18 años. TIP: Quizás te sirva
alguna de las funciones que creaste en ejercicios anteriores.
b. Ahora crearemos una función que reciba un usuario y un curso, y
retorne el usuario con el nuevo curso. Por ejemplo si recibimos al
usuario del ejemplo y el curso de “Introducción a las bases de datos”,
la función debe retornar:
*/

const javier = {
    nombre: "Javier",
    apellido: "Miguel",
    edad: 18,
    cursos: ["JS"],
  };
  
  const esteban = {
    nombre: "Estaban",
    apellido: "Miguel",
    edad: 25,
    cursos: ["JS", "Bases de datos"],
  };
  
  const saludarUsuario = (usuario) => {
    if (usuario.edad >= 18) {
      return `Hola ${usuario.nombre} ${usuario.apellido} sos mayor de edad`;
    }
    return `Hola ${usuario.nombre} ${usuario.apellido} sos menor de edad`;
  };

  
  const agregarCurso = (usuario, curso) => {
    usuario.cursos.push(curso);
    console.log("Estoy dentro de la funcion", usuario);
    return usuario;
  };
  
  console.log(agregarCurso(javier, "Base datos"));