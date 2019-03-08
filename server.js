const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/Public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// Desplegar Home en menú
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'vaTeos de jeSÚS'
    });
});

// Desplegar About en menú
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});