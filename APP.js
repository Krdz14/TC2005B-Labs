const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const session = require('express-session');
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection); 

app.use('/about', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'old_labs', 'about.html'));
});

const usersRutas = require('./routes/users.routes');
app.use('/users', usersRutas);

const modeloRutas = require('./routes/modelo.routes');
app.use('/modelo', modeloRutas);

const sneakersRutas = require('./routes/agregar.routes');
app.use('/', sneakersRutas);

app.use((request, response, next) => {
    response.statusCode = 404;
    response.render('404');
})

app.listen(3000);

