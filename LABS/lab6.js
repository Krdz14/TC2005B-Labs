const buttonCherie = document.getElementById("itemCherie");
const buttonMartini = document.getElementById("itemMartini");
const buttonFerrari = document.getElementById("itemFerrari");

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

buttonCherie.onclick=()=>{
    const imagen=document.getElementById("orderPlaced");
    imagen.alt="Orden";
    imagen.src="https://static.knowledgebase.ai/upload/10142137/464c761d20-fabd610b2e6a53bf15e6.png";
};

buttonMartini.onclick=()=>{
    const imagen=document.getElementById("orderPlaced");
    imagen.alt="Orden";
    imagen.src="https://static.knowledgebase.ai/upload/10142137/464c761d20-fabd610b2e6a53bf15e6.png";
};

buttonFerrari.onclick=()=>{
    const imagen=document.getElementById("orderPlaced");
    imagen.alt="Orden";
    imagen.src="https://static.knowledgebase.ai/upload/10142137/464c761d20-fabd610b2e6a53bf15e6.png";
};