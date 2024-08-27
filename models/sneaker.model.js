const sneakers = [
    {
        descripcion: "Adidas Samba",
        imagen: "https://media.gq.com.mx/photos/65c2943789f66df8f3bcdece/16:9/w_2560%2Cc_limit/adidas_Samba_Vegan.jpg",
    },
    {
        descripcion: "Jordan 1 Nike",
        imagen: "https://minymal.com.mx/wp-content/uploads/2022/03/Jordan-1-High-Retro-University-Blue-6.webp",
    },
    {
        descripcion: "Converse",
        imagen: "https://converse.com.mx/media/catalog/product/c/o/converse-chuck-70-en-bota-de-lona-unisex-negro-162050c-3_c8qe79v5p37epkki.jpg"
    },
];

module.exports = class Sneaker{
    
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_descripcion,mi_imagen) {
        this.descripcion = mi_descripcion;
        this.imagen = mi_imagen;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        sneakers.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return sneakers;
        
    }

}
