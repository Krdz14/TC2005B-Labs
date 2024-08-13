const boton_preparar = document.getElementById('boton_chilaquiles');
const boton_verde = document.getElementById('boton_salsa_verde');
const boton_rojo = document.getElementById('boton_salsa_roja');
const boton_suerte = document.getElementById('boton_suerte');
const chilaquiles = [
    {
        descripcion: "Chilaquiles en salsa verde", 
        imagen: "https://cdn7.kiwilimon.com/recetaimagen/1626/3018.jpg",
    },
    {
        descripcion: "Chilaquiles en salsa roja", 
        imagen: "https://cdn0.recetasgratis.net/es/posts/6/9/0/chilaquiles_rojos_con_pollo_75096_orig.jpg",
    },
    {
        descripcion: "Chilaquiles con mole", 
        imagen: "https://cdn7.kiwilimon.com/recetaimagen/38304/640x640/49051.jpg.webp",
    },
]
boton_preparar.onclick = () => {
    const imagen = document.getElementById('imagen_chilaquiles');
    imagen.alt = "Imagen de plato con totopos";
    imagen.src = "https://cdn0.recetasgratis.net/es/posts/9/7/9/totopos_caseros_al_horno_58979_paso_4_600.jpg";
    boton_preparar.style = "display:none";
    boton_verde.style = "display:inline";
    boton_rojo.style = "display:inline";
    boton_suerte.style = "display:inline";
}
boton_verde.onclick = () => {
    const imagen = document.getElementById('imagen_chilaquiles');
    imagen.alt = "Chilaquiles en salsa verde";
    imagen.src = "https://cdn7.kiwilimon.com/recetaimagen/1626/3018.jpg";
    imagen.alt = chilaquiles[0].descripcion;
    imagen.src = chilaquiles[0].imagen;
    boton_verde.style = "display:none";
    boton_rojo.style = "display:none";
    boton_suerte.style = "display:none";
}
boton_rojo.onclick = () => {
    const imagen = document.getElementById('imagen_chilaquiles');
    imagen.alt = "Chilaquiles en salsa verde";
    imagen.src = "https://cdn0.recetasgratis.net/es/posts/6/9/0/chilaquiles_rojos_con_pollo_75096_orig.jpg";
    imagen.alt = chilaquiles[1].descripcion;
    imagen.src = chilaquiles[1].imagen;
    boton_verde.style = "display:none";
    boton_rojo.style = "display:none";
    boton_suerte.style = "display:none";
}
boton_suerte.onclick = () => {
    const imagen = document.getElementById('imagen_chilaquiles');
    const num_chilaquiles = Math.floor(Math.random() * 3);
    imagen.alt = chilaquiles[num_chilaquiles].descripcion;
    imagen.src = chilaquiles[num_chilaquiles].imagen;
    boton_verde.style = "display:none";
    boton_rojo.style = "display:none";
    boton_suerte.style = "display:none";
}
