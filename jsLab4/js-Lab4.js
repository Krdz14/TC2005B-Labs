import `math.js`;

// PROMPT
const edad = prompt("Que edad tienes?");
document.write(`Tienes ${edad} años sin bañarte LOL`);


const num1 = math.random();
const num2 = math.random();

const suma = prompt(`La suma de ${num1} + ${num2} es:`);
console.assert(suma == num1+num2);
