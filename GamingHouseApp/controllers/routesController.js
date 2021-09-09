const jsonFile = require('./jsonController');

const controlador = {
    index: (req, res) => {
        //Debido a que en app.js se colocó 'app.set('views', './views');', no se necesita colocar la ruta ni la extensión del archivo ejs
        res.render('AppHome', {view: 'home', articles: jsonFile.read()}); /*index*/
    },
    productCart: (req, res) => {
        res.render("productCart");
    },
    productDetail: (req, res) => {
        res.render("productDetails");
    },
    register: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/register.html'));
    },
    newProduct: (req, res) => {
        res.render("AppNewProduct", {view: 'new'}); /*newProduct*/
    },
    editProduct: (req, res) => {
        res.render("AppEditProduct", {view: 'edit'}); /*editProduct*/
    },
    login: (req, res) => {
        res.render('AppLogin'); /*login*/
    },
    register: (req, res) => {
        res.render("AppRegister"); /*register*/
    }
}

module.exports = controlador;