const express = require('express');
const app = express();

// Middleware para habilitar CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // Permitir solicitudes desde cualquier origen
    res.header("Access-Control-Allow-Headers", "GET,PUT,POST,DELETE");
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");    
    next();
});

// Ruta de ejemplo
app.get('/get_frameid_dle_rae', (req, res) => {
    // Código para manejar la solicitud aquí
    res.send('Pong'); // Envía 'Pong' como respuesta
});

// Puerto en el que escucha el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
