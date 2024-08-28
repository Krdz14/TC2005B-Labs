const Sneakers = require('../models/sneaker.model')

exports.get_root = (request, response, next) => {
    const cookies = request.get('Cookie');

    let ultimo_pedido = '';
    let imagen = '';

    if(cookies) {
        ultimo_pedido = cookies.split(';')[0].split('=')[1];
        imagen = cookies.split(';')[1].split('=')[1];
    }

    response.render('inicio', {
        username: request.session.username || '',
        sneakers: Sneakers.fetchAll(),
        ultimo_pedido: ultimo_pedido,
        imagen: imagen,
    });
};


exports.get_agregar = (request, response, next) => {
    response.render('agregar', {
        username: request.session.username || '',
    });
};

exports.post_agregar = (request, response, next) => {
    const sneakers = new Sneakers(request.body.descripcion, 
        request.body.imagen);

    sneakers.save();

    response.redirect('/');
};