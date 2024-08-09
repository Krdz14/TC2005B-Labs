// CONSOLA (log, info, warn, error, assert)
console.log("hola mundo!");
console.info("esto es informacion importante");
console.warn("Cuidado!!");
console.error("Ya te equivocaste...");
console.assert(1 == 1);
console.assert(1 == 0);


// VARIABLES | CONSTANTES

//let sirve para declarar variables
let nombre= 'Kate';
console.log("Hola " + nombre);

//% {nombre_variable} sirve para imprimir el valor de una variables con ``
console.log(`${nombre} esta programando`);

//let precio = 92; (se puede modificar el precio desde la consola)
const precio_sb = 92;

// ALCANCE DE LAS VARIABLES

{
    let precio_crema = 20; //Variable no global
}
// error porque este esta declarada en otro ambito
//console.log(precio_crema);


// ALERT | PROMPT | CONFIRM
alert (`Caramel Macchiato cuesta ${precio_sb}`);

const chilaquiles_favo = prompt("Cuales son tus chilaquiles favoritos?");
console.log(`Tus chilaquiles favoritos son ${chilaquiles_favo}`);

const hambre = confirm("Tienes hambre?");
if (hambre){
    console.info("Pide unos chilaquiles");
} else{
    console.warn("Regresa cuando tengas hambre");
}

// FUNCIONES TRADICIONALES
function prepara_chilaquiles(tipo){
    console.log(`Preparando orden de chilaquiles ${tipo}`);
}

//prepara_chilaquiles(chilaquiles_favo);


// FUNCIONES MODERNAS
 const decoracion_chi = () => {
    console.log("con crema y aguacate.");
 }

//decoracion_chi();

document.getElementById("preparar").onclick = () =>{
    prepara_chilaquiles(chilaquiles_favo);
    decoracion_chi();
}

// ARREGLOS
const arreglo = ["Elemento"];

const arreglo2 = new Array();

arreglo.push("Otro elemento");
arreglo[10] = "Uno más";


// ARREGLOS ASOCIATIVOS

arreglo ["Chilaquil"] = "verde";


// RECORRIDO TRADICIONAL DEL ARREGLO
for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

// RECORRIDOS ALTERNATIVOS DEL ARREGLO
for(let posicion in arreglo) {
   console.log(posicion + ": " + arreglo[posicion]);
}

// OBJETOS
const objeto = {};

const chilaquil = {
    salsa: "verde",
    extras: "crema, queso y aguacate",
}

console.log(chilaquil);
// modificar html
