const filesystem = require('fs'); // fs es el modulo de filesystem

filesystem.writeFileSync('hola.txt', 'Hola desde node'); //Sync secuencial 




// Codigo asincrono
const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
       console.log(item);
    }, item);
} 

// setTimeout recibe como parametro, una funcion, y la cantidad de segundos
//que van a pasar antes de que se ejecute la funcion.
setTimeout(()=>{
    console.log("dangerrrr");
}, 12000);


//http es el módulo que contiene todas las funciones de un servidor http
const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    if (request.url == "/preparar"){
        response.write(`
            <!DOCTYPE html>
            <html data-theme="light">
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <title>Chilaquiles</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
                </head>
                <body>
                    <nav class="navbar" role="navigation" aria-label="main navigation">
                        <div class="navbar-brand">
                            <a class="navbar-item" href="https://tecfood.tec.mx/es/monterrey/chilaquiles-tec">
                                <img src="https://tecfood.tec.mx/sites/g/files/vgjovo1061/files/styles/de2e/public/2022-09/CCM-chilaquiles-logo.png?itok=3wX3kVxi">
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
                                <a class="navbar-item">
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
                            <header>
                                <h1 class="title">Preparar chilaquiles</h1>
                            </header>
                            <main>
                                <br><br>
                                    <div class="field">
                                    <label class="label" for="nombre">Nombre</label>
                                    <div class="control">
                                        <input id="nombre" name="nombre" class="input" type="text" placeholder="Lalo">
                                    </div>
                                </div>
                                <div class="field">
                                    <label for="salsa" class="label">Salsa</label>
                                    <div class="control">
                                        <div class="select">
                                            <select id="salsa" name="salsa">
                                                <option value="verde">Verde</option>
                                                <option value="roja">Roja</option>
                                                <option value="chipotle">Chipotle</option>
                                                <option value="mole">Mole</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="control">
                                    <input type="submit" class="button is-link" value="Preparar">
                                </div>
                                </form>
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
            `);    

    } else {
    response.write(`
        <!DOCTYPE html>
        <html data-theme="light">
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Chilaquiles</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">
            </head>
            <body>
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://tecfood.tec.mx/es/monterrey/chilaquiles-tec">
                            <img src="https://tecfood.tec.mx/sites/g/files/vgjovo1061/files/styles/de2e/public/2022-09/CCM-chilaquiles-logo.png?itok=3wX3kVxi">
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
                            <a class="navbar-item">
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
                        <header>
                            <h1 class="title">Chilaquiles</h1>
                        </header>
                        <main>
                            <br>
                            <p class="block">
                                <strong>¡hola mundo!</strong> 
                                Los <span>chilaquiles</span> son <em>deliciosos</em>. 
                            </p>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Con salsa verde</td>
                                        <td>Con salsa de chipotle</td>
                                    </tr>
                                    <tr>
                                        <td>Crema, queso y aguacate</td>
                                        <td>Crema, queso y aguacate</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <td>Nuestros mejores chilaquiles</td>
                                </tfoot>
                                <thead>
                                    <tr>
                                        <th>Chilaquiles verdes</th>
                                        <th>Chilaquiles rojos</th>
                                    </tr>
                                </thead>
                            </table>
                            <a href="/preparar" class="button is-warning" id="boton_chilaquiles">Preparar orden</a>
                            <button style="display:none" class="button is-success" id="boton_salsa_verde">Poner salsa verde</button>
                            <button style="display:none" class="button is-warning" id="boton_suerte">Voy a tener suerte</button>
                            <button style="display:none" class="button is-danger" id="boton_salsa_roja">Poner salsa roja</button>
                            <br><br>
                            <img width="40%" id="imagen_chilaquiles" src="" alt="" />
                            <p>Anímate a probar suerte con los chilaquiles de la casa</p>
                            <br><br>
                            <h2 class="title">Comandos de git</h2>
                            <ul>
                                <li>git clone [repositorio]</li>
                                <li>git add -A</li>
                                <li>git commit -m "mensaje en tiempo imperativo"</li>
                                <li>git checkout -b [nombre_rama]</li>
                                <li>git push</li>
                                <li>git pull</li>
                                <li>git merge [rama_a_integrar]</li>
                            </ul>
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
        `);
    }
    
    response.end();
});

server.listen(3000); 