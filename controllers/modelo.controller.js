const Sneakers = require('../models/sneaker.model');

exports.get_modelo = (request, response, next) => {
    console.log('Ruta /modelo');
    response.render('seleccion'); 
};

exports.post_modelo = (request,response, next) => {
    console.log(request.body);
    let seleccion_sneakers = 0;

    if (request.body.modelo == "jordan") {
        seleccion_sneakers = 1;
    } else if (request.body.modelo == "converse") {
        seleccion_sneakers = 2;
    }

    sneakers = Sneakers.fetchAll();

    response.render('seleccionando.ejs', {
        alt: sneakers[seleccion_sneakers].descripcion,
        src: sneakers[seleccion_sneakers].imagen,
    });
};




 