//4) Para cambiar el aire, vamos a hacer una función que reciba la edad de una persona y nos retorne “sos mayor de edad” si la persona tiene al menos 18 años, sino debe retornar “sos menor de edad”.

function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return "sos mayor de edad";
  }
  return "sos menor de edad";
}

console.log(5, esMayorDeEdad(5));
console.log(15, esMayorDeEdad(15));
console.log(25, esMayorDeEdad(25));
