import `math.js`;

// PROMPT
const edad = prompt("Que edad tienes?");
document.write(`Tienes ${edad} años sin bañarte LOL`);


function sumaRandom (){
    const start = new Date();
    const num1 = math.random();
    const num2 = math.random();

    const suma = prompt(`La suma de ${num1} + ${num2} es:`);
    console.assert(suma == num1+num2);
    

    const end = new Date();
    document.write(end.getTime() - start.getTime(), "ms");
}

sumaRandom();