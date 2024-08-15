
// A


const num = prompt("Ingresa un número:");
document.write("A) <table border='2'>");
document.write("<tr> <th>Número</th> <th>Cuadrado</th> <th>Cubo</th> </tr>");

for (let i = 1; i <= num; i++) {
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    document.write("<td>" + i * i + "</td>");
    document.write("<td>" + i * i * i + "</td>");
    document.write("</tr>");
}
document.write("</table>");


// B
const num1 = math.floor(math.random() * 100);
const num2 = math.floor(math.random() * 100);


let Start= new Date().getTime();
const suma = prompt(`La suma de ${num1} + ${num2} es:`);
let Fin = new Date().getTime();

let tiempo = (Fin-Start)/1000;

document.write(`<br> B) Tiempo de respuesta: ${tiempo} ms.`)
if (num1+num2==suma){
    document.write("<br>Respuesta correcta<br>");
}  else{
    document.write("<br>Respuesta incorrecta<br>");
}

// C

const arreglo = [0, -3, 1, 5, 0, -80, 7];
const res = contador(arreglo);

function contador(arreglo){
    let ceros = 0;
    let negativos = 0;
    let positivos = 0;

    for (let i = 1; i < arreglo.length+1; i++){
        if (arreglo[i]< 0){
            negativos++;
        }else if (arreglo[i] > 0){
            positivos++;
        }else{
            ceros++;
        }
    }
    return{
        negativos, ceros, positivos
    };
}

document.write("<br>C) Contador<br>");
document.write(`Arreglo [${arreglo}]<br>`);
document.write(`Positivos = ${res.positivos} | Negativos = ${res.negativos} | Ceros = ${res.ceros}<br>`);

// D
const matrix = [[5, 3, 7, 17],
                [51, 87, 12, 93]];
document.write(`<br>D) Matriz: <br>[${matrix[0]} <br> ${matrix[1]}]`);

function promedio(matrix){
    let promedioRes = new Array();

    for (let i = 0; i < matrix.length; i++){
        let sum = 0;
        let renglon = matrix[i];

        for (let j = 0; j < renglon.length; j++){
            sum += renglon[j];
        }
        let avg = sum/renglon.length;
        promedioRes.push(avg);
    }

    return promedioRes;
}

let res2 = promedio(matrix);
document.write(`<br> Tabla promedios: [${res2}] <br>`);

// E
let numI = 2004;

function inverso(num){
   let invertido = 0;
   let resto = num;

   do {
    invertido = invertido * 10 + (resto % 10)
    resto = Math.floor(resto / 10)
    } while ( resto > 0 )
  return invertido
}

const res5 = inverso(numI);

document.write(`<br> E) El número es ${numI}, invertido es ${res5}`); 