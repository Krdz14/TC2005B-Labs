const Sneakers = require('../models/sneaker.model');
const Ordenes = require('../models/ordenes.model');

exports.get_root = (request, response, next) => {

    let mensaje = request.session.mensaje || '';

    if (request.session.mensaje) {
        request.session.mensaje = '';
    }

   
    Ordenes.fetchAll().then(([ordenes, fieldData]) => {
        return Sneakers.fetch(request.params.sneakers_id)
            .then(([rows, fieldData]) => {
                return response.render('inicio', {
                    username: request.session.username || '',
                    sneakers: rows,
                    mensaje: mensaje,
                    ordenes: ordenes,
                });
            })
    }).catch((error) => {
        console.log(error);
    });
};


exports.get_agregar = (request, response, next) => {
    response.render('agregar', {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
    });
};

exports.post_agregar = (request, response, next) => {

    const sneakers = new Sneakers(request.body.descripcion, 
        request.body.imagen);

    request.session.mensaje = `${sneakers.descripcion} fueron registrados con éxito`;

    sneakers.save()
        .then(() => {
            return response.redirect('/');
        }).catch((error) => {
            console.log(error)
        });
};