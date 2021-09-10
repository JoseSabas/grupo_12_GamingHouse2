const express = require('express');
const app = express();
const methodOverride =  require('method-override'); // Para poder usar los métodos PUT y DELETE

const mainRoute = require('./routes/main');
const productsRouter = require('./routes/products');
const sectionsRouter = require('./routes/sections');
const carRouter = require('./routes/car');

app.use(express.urlencoded({ extended: false })); //Estas dos líneas permiten recibir datos por POST
app.use(express.json());
app.use(methodOverride('_method')); //Para poder usar el method="POST" en el formulario por PUT y DELETE

app.use('/', mainRoute); //El primer parámetro es el 'prefijo' (Por ejemplo, para ver el home se tiene que poner 'http://localhost:3000/'). Si hubiera puesto '/carrito', en la ruta tendria que haber puesto 'http://localhost:3000/carrito/' para ver el home
app.use('/products', productsRouter);
app.use('/section', sectionsRouter);
app.use('/car', carRouter);

app.set('view engine', 'ejs'); //Se configura EJS como el template engine de la app
app.set('views', './views');
app.use(express.static('views')); //Se define donde se encuentran los archivos estáticos ('public')

app.listen(3000, () => {
    console.log('Server running at port 3000 ');
});