const Sneakers = require('../models/sneaker.model');
const Users = require('../models/users.model');

const Ordenes = require('../models/ordenes.model');

exports.get_modelo = (request, response, next) => {
    console.log('Ruta /modelo');

    Sneakers.fetchAll()
        .then(([sneakers, fieldData]) => {
            return Users.fetchAll()
                .then(([users, fieldData]) => {
                    return response.render('seleccion', {
                        username: request.session.username || '',
                        sneakers: sneakers,
                        users: users,
                        csrfToken: request.csrfToken(),
                    }); 
                });
        }).catch((error) => { 
            console.log(error);
        });
};

exports.post_modelo = (request,response, next) => {
    console.log(request.body);

    const orden = new Ordenes(request.body.username, request.body.modelo);

    orden.save()
        .then(() => {
            request.session.mensaje = 'Trabajando nuevo pedido de sneakers.';
            response.redirect('/');
        }).catch((error) => {
            console.log(error);
        });
};




 