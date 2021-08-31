const jsonFile = require('./jsonController');

const controlador = {
    index: (req, res) => {
        //Debido a que en app.js se colocó 'app.set('views', './views');', no se necesita colocar la ruta ni la extensión del archivo ejs
        res.render('AppHome', {view: 'home', articles: jsonFile.read()}); /*index*/
    },
    productCart: (req, res) => {
<<<<<<< HEAD
        res.render("AppProductcart", {view: 'car'}); /*productCart*/
    },
    productDetail: (req, res) => {
        res.render("AppProductDetails", {view: 'detail'}); /*productDetails*/
=======
        res.render("productCart");
    },
    productDetail: (req, res) => {
        res.render("productDetails");
    },
    register: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/register.html'));
>>>>>>> 240c0cbebbd100ff5a38c53f89934bc92b4c9870
    },
    newProduct: (req, res) => {
        res.render("AppNewProduct", {view: 'new'}); /*newProduct*/
    },
    editProduct: (req, res) => {
<<<<<<< HEAD
        res.render("AppEditProduct", {view: 'edit'}); /*editProduct*/
    },
    login: (req, res) => {
        res.render('AppLogin'); /*login*/
    },
    register: (req, res) => {
        res.render("AppRegister"); /*register*/
=======
        res.render("editProduct");

>>>>>>> 240c0cbebbd100ff5a38c53f89934bc92b4c9870
    }
}

module.exports = controlador;