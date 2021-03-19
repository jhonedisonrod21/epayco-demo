/**
 * dependencias
 */
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
var hbs = require('hbs');

/**
 * configuracion del servicio, sus midlewares y template engine
 */
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve('public')))
app.set('view engine', 'hbs');
app.set('views', path.resolve('views'));
hbs.registerPartials(path.resolve('views') + '/templates', function(err) {});

/**
 *  servico de escucha para la pagina de inicio
 */
app.get('/', (req, res) => {
    res.render('home', {});
})

app.listen(3000, () => {
    console.log('su servido expres esta escuchando en el puerto 3000');
});