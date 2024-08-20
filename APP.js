const express = require('express');
const app = express();

//Middleware
app.use((request, response, next)=>{
    console.log('Middleware!');
    next(); //Le permite a la peticion avanzar al sig middleware
});

app.use((request, response, next)=>{
    console.log('Otro middleware!');
    response.send("Hola mundo!"); //Manda la respuesta

});

app.listen(3000);