const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next)=>{
    console.log('Middleware!');
    next(); //Le permite a la peticion avanzar al sig middleware
});

app.use('/about', (request, response, next) => {
    response.sendFile(path.join(__dirname, 'old_labs', 'about.html'));
});

const modeloRutas = require('./routes/modelo.routes');
app.use('/modelo', modeloRutas);

const sneakersRutas = require('./routes/agregar.routes');
app.use('/', sneakersRutas);

app.use((request, response, next) => {
    response.statusCode = 404;
    response.render('404');
})

app.listen(3000);

