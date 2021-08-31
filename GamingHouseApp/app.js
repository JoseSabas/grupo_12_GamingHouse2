const express = require('express');
const app = express();
const generalRoutes = require('./routes/generalRoutes');

app.use('/', generalRoutes); //El primer parámetro es el 'prefijo' (Por ejemplo, para ver el home se tiene que poner 'http://localhost:3000/')
//Si hubiera puesto '/carrito', en la ruta tendria que haber puesto 'http://localhost:3000/carrito/' para ver el home

app.set('view engine', 'ejs'); //Se configura EJS como el template engine de la app
app.set('views', './views');
app.use(express.static('views')); //Se define donde se encuentran los archivos estáticos ('public')

app.listen(3000, () => {
    console.log('Server running at port 3000 ');
});