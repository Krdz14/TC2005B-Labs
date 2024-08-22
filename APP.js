const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));


const html_header = `
            <!DOCTYPE html>
            <html data-theme="light">
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <title>Hype Kicks</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
                </head>
                <body>
                    <nav class="navbar" role="navigation" aria-label="main navigation">
                        <div class="navbar-brand">
                            <a class="navbar-item" href="https://www.innvictus.com/">
                                <img src="https://i.pinimg.com/736x/d7/90/b8/d790b84763ab26ddfeaf55425192ea6c.jpg">
                            </a>
                            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
            
                        <div id="navbarBasicExample" class="navbar-menu">
                            <div class="navbar-start">
                                <a href="/" class="navbar-item">
                                Inicio
                                </a>
                            </div>
                            <div class="navbar-end">
                                <div class="navbar-item">
                                    <div class="buttons">
                                        <a class="button is-primary">
                                        <strong>Registrarse</strong>
                                        </a>
                                        <a class="button is-light">
                                        Iniciar sesión
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <section class="section">
                        <div class="container">
`;

const html_footer = `
                        </main>
                        <footer class="footer">
                            <div class="content has-text-centered">
                                <p>
                                    <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>.
                                    The source code is licensed
                                    <a href="https://opensource.org/license/mit">MIT</a>. The
                                    website content is licensed
                                    <a href="https://creativecommons.org/licenses/by-nc-sa/4.0//"
                                    >CC BY NC SA 4.0</a
                                    >.
                                </p>
                            </div>
                        </footer>
                    </div>
                </section>
                <script src="js/poe.js"></script>
            </body>
        </html>
    `;

//Middleware
app.use((request, response, next)=>{
    console.log('Middleware!');
    next(); //Le permite a la peticion avanzar al sig middleware
});

const modeloRutas = require('./routes/modelo.routes');
app.use('/modelo', modeloRutas);
app.use((request, response, next)=>{
    console.log('Otro middleware!');
    response.send(`
            ${html_header}
            <header>
                <h1 class="title">Sneakers</h1>
            </header>
            <main>
                <br>
                <p class="block">
                    <strong>¡Bienvenidos a su tienda de confianza!</strong> 
                    Los <span>sneaker</span> son <em>vida</em>. 
                </p>
                <table class="table">
                    <tbody>
                        <tr>
                            <td>Adidas Samba</td>
                            <td>24, 24.5, 27, 28</td>
                        </tr>
                        <tr>
                            <td>Nike Jordan 1</td>
                            <td>23, 26, 28</td>
                        </tr>
                        <tr>
                            <td>Converse</td>
                            <td>23.5, 25, 27.5</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <td> Elige cualquiera de nuestros modelos</td>
                    </tfoot>
                    <thead>
                        <tr>
                            <th>Modelo</th>
                            <th>Tallas disponibles</th>
                        </tr>
                    </thead>
                </table>
                <a href="/modelo" class="button is-warning" id="boton_sneakers">Crear pedido</a>
            ${html_footer}
`); //Manda la respuesta

}); //Pagina Inicio

app.listen(3000);