const express = require('express');
const router = express.Router();

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
                                    <a href="https://creativecommons.org/licenses/by-nc-sa/4.0//">CC BY NC SA 4.0</a>.
                                </p>
                            </div>
                        </footer>
                    </div>
                </section>
            </body>
        </html>
    `;

router.get('/',(request,response,next)=>{
    console.log('Ruta /modelo');
    response.send(`${html_header}
        <header>
            <h1 class="title">Seleccion Modelo</h1>
        </header>
        <main>
            <br><br>
            <form action="/modelo" method="POST">
                <div class="field">
                <label class="label" for="nombre">Nombre</label>
                <div class="control">
                    <input id="nombre" name="nombre" class="input" type="text" placeholder="Kate" required>
                </div>
            </div>
            <div class="field">
                <label for="modelo" class="label">Modelo</label>
                <div class="control">
                    <div class="select">
                        <select id="modelo" name="modelo">
                            <option value="samba">Adidas Samba</option>
                            <option value="jordan">Nike Jordan 1</option>
                            <option value="converse">Converse</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="control">
                <input type="submit" class="button is-link" value="Modelos">
            </div>
            </form>
        ${html_footer}
`);
}); // Pagina seleccion modelo

router.post('/', (request,response, next)=>{
    console.log(request.body);
    let seleccion_sneakers = 0;

    if (request.body.modelo == "jordan") {
        seleccion_sneakers = 1;
    } else if (request.body.modelo == "converse") {
        seleccion_sneakers = 2;
    }

    console.log(seleccion_sneakers);
    
    response.send(`
        ${html_header}
        <img alt="${sneakers[seleccion_sneakers].descripcion}" src="${sneakers[seleccion_sneakers].imagen}">
        ${html_footer}
    `)
});

module.exports = router;