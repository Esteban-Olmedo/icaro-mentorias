//5) Vamos a crear una función, que recibe 2 parámetros: el primero será el nombre de la persona, y el segundo será la edad. Esta función debe retornar “Hola Icaro sos mayor de edad” (tiene al menos 18 años) si el usuario es mayor de edad, sino  “Hola Icaro sos menor de edad” (menor de 18 años). TIP: Podes usar las funciones que hiciste en 3 y 4, para resolver el problema más fácil.

function saludarConNombre(nombre) {
  return `Hola ${nombre}`;
}

function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return "sos mayor de edad";
  }
  return "sos menor de edad";
}

function saludarConEdad(nombre, edad) {
  const saludo = saludarConNombre(nombre);
  const esMayor = esMayorDeEdad(edad);
  return `${saludo} ${esMayor}`;
}

console.log(saludarConEdad("Juan", 22));
console.log(saludarConEdad("Esteban", 15));
