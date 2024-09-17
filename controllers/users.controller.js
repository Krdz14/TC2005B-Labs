const Users = require('../models/users.model');
const bcrypt = require('bcryptjs');

exports.get_signup = (request, response, next) => {
    response.render('signup', {
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
    });
}
exports.post_signup = (request, response, next) => {
    const nuevo_usuario = new Users(
        request.body.username, request.body.nombre, request.body.password);
    nuevo_usuario.save().then(() => {
        return response.redirect('/users/login');
    }).catch((error) => {
        console.log(error);
    });
    
};

exports.get_login = (request, response, next) => {
    let mensaje = request.session.mensaje || '';
    if (request.session.mensaje) {
        request.session.mensaje = '';
    }

    response.render('login', {
        username: request.session.username || '',
        mensaje: mensaje,
        csrfToken: request.csrfToken(),
    });
};

exports.post_login = (request, response, next) => {
    request.session.mensaje = '';

    Users.fetchOne(request.body.username).then(([users, fieldData]) => {
        if (users.length > 0) {
           console.log(users);
            bcrypt.compare(request.body.password, users[0].password)
                .then(doMatch => {
                    if (doMatch) {
                        request.session.isLoggedIn = true;
                        request.session.nombre = users[0].nombre;
                        request.session.username = request.body.username;
                        return request.session.save(err => {
                            response.redirect('/');
                        });
                    }
                    request.session.mensaje = 'El usuario y/o contraseña no coinciden';
                    return response.redirect('/users/login');
                }).catch(err => {
                    request.session.mensaje = 'El usuario y/o contraseña no coinciden';
                    return response.redirect('/login');
                });
        } else {
            request.session.mensaje = 'El usuario y/o contraseña no coinciden';
            return response.redirect('/users/login');
        }
    }).catch((error) => {
        return response.redirect('/users/login');
    });
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};