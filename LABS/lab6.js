const agregarCherie = document.getElementById("1");
const agregarMartini = document.getElementById("2");
const agregarFerrari = document.getElementById("3");

agregarCherie.addEventListener("click", addC);
agregarMartini.addEventListener("click", addM);
agregarFerrari.addEventListener("click", addF);

const buttonCheckout = document.getElementById("checkout");



//Count Cherie
let count = 0;
let sum = 0;

// Count Martini
let count1 = 0;
let sum1 = 0;

//Count Ferrari
let count2 = 0;
let sum2 = 0;

// Subtotal y Total
let sumaSubtotal = 0;
let sumaTotal = (sumaSubtotal * 0.16) + sumaSubtotal;

let cart = {};


const gallery = [
    {
        descripcion: "MA CHERIE",
        imagen: "https://i.pinimg.com/564x/ab/b1/62/abb162cc9f5db121979244b4b5822570.jpg",
    },
    {
        descripcion: "MARTINI",
        imagen: "https://i.pinimg.com/564x/d7/45/d1/d745d173ac9d2562e9a976f271030f3a.jpg",
    },
    {
        descripcion: "FERRARI",
        imagen: "https://i.pinimg.com/564x/68/38/72/683872441e7f60e8a8c60823040da909.jpg",
    },
];

//AGREGAR IMAGEN A CARD 1
var img = document.createElement("img");
img.src = `${gallery[0].imagen}`;
var src = document.getElementById("Ma cherie");
src.appendChild(img);
var cont = document.getElementById("cheriet");
var content = document.createTextNode(`${gallery[0].descripcion}`);
cont.appendChild(content);

//AGREGAR IMAGEN A CARD 2
var img = document.createElement("img");
img.src = `${gallery[1].imagen}`;
var src = document.getElementById("MARTINI");
src.appendChild(img);
var cont = document.getElementById("MARTINIT");
var content = document.createTextNode(`${gallery[1].descripcion}`);
cont.appendChild(content);

//AGREGAR IMAGEN & TEXTO A CARD 3
var img = document.createElement("img");
img.src = `${gallery[2].imagen}`;
var src = document.getElementById("FERRARI");
src.appendChild(img);
var cont = document.getElementById("FERRARIT");
var content = document.createTextNode(`${gallery[2].descripcion}`);
cont.appendChild(content);

buttonCheckout.onclick=()=>{
    const img = document.getElementById("orderPlaced");
    img.src = "https://support.jamestowndistributors.com/hc/article_attachments/360069169914/mceclip1.png";
    src.appendChild(img);
    
}

function addC(event) {
    let price = Number(event.target.dataset.price);
    let title = event.target.dataset.title;
    let id = event.target.dataset.id;

if (id in cart) {
    cart[id].qty++;
} else {
    let cartItem = {
        title: title,
        price: price,
        qty: 1
    };
    cart[id] = cartItem
}

    count++;
    sum += price;
    sumaSubtotal += sum;
    sumaTotal = (sumaSubtotal * 0.16) + sumaSubtotal;
    updateCart();
}

function addM(event) {
    let price = Number(event.target.dataset.price);
    let title = event.target.dataset.title;
    let id = event.target.dataset.id;

if (id in cart) {
    cart[id].qty++;
} else {
    let cartItem = {
        title: title,
        price: price,
        qty: 1
    };
    cart[id] = cartItem
}

    count1++;
    sum1 += price;
    sumaSubtotal += sum1;
    sumaTotal = (sumaSubtotal * 0.16) + sumaSubtotal;
    updateCartM();
}

function addF(event) {
    let price = Number(event.target.dataset.price);
    let title = event.target.dataset.title;
    let id = event.target.dataset.id;

if (id in cart) {
    cart[id].qty++;
} else {
    let cartItem = {
        title: title,
        price: price,
        qty: 1
    };
    cart[id] = cartItem
}

    count2++;
    sum2 += price;
    sumaSubtotal += sum2;
    sumaTotal = (sumaSubtotal * 0.16) + sumaSubtotal;
    updateCartF();
}

function updateCart() {
    document.getElementById("sum").textContent = sum;
    document.getElementById("count").textContent = count;
    subtotalyTotal();
}

function updateCartM() {
    document.getElementById("sum1").textContent = sum1;
    document.getElementById("count1").textContent = count1;
    subtotalyTotal();
}

function updateCartF() {
    document.getElementById("sum2").textContent = sum2;
    document.getElementById("count2").textContent = count2;
    subtotalyTotal();
}

function subtotalyTotal(){
    document.getElementById("subtotal").textContent = sumaSubtotal;
    document.getElementById("total").textContent = sumaTotal;
}