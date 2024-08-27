const Sneakers = require('../models/sneaker.model')

exports.get_root = (request, response, next) => {
    response.render('inicio', {
        sneakers: Sneakers.fetchAll(),
    });
};

exports.get_agregar = (request, response, next) => {
    response.render('agregar');
};

exports.post_agregar = (request, response, next) => {
    const sneakers = new Sneakers(request.body.descripcion, 
        request.body.imagen);

    sneakers.save();

    response.redirect('/');
};