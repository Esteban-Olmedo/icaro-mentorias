//3) Para seguir complicando el problema, vamos a crear una función que reciba como parámetro un nombre y retorne “Hola Icaro” (cambia Icaro por tu nombre)

function saludarConNombre(nombre) {
  return `Hola ${nombre}`;
}

const saludoANacho = saludarConNombre("Nacho");
const saludoAJavier = saludarConNombre("Javier");
const saludoAEsteban = saludarConNombre("Esteban");

console.log(saludarConNombre("Nicanor"));

console.log(saludoANacho);
console.log(saludoAJavier);
console.log(saludoAEsteban);
