const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controlador = {
    index: (req, res) => {/*Se muestran los productos top (6 de cada categoría)*/
		const topMonitors = products.filter(product => product.section===1 && product.top);
		const topHeadphones = products.filter(product => product.section===2 && product.top);
		const topKeyboards = products.filter(product => product.section===3 && product.top);
		const topMouse = products.filter(product => product.section===4 && product.top);
		const topSpeakers = products.filter(product => product.section===5 && product.top);
		res.render('AppHome', {view: 'home', topMonitors, topHeadphones, topKeyboards, topMouse, topSpeakers});
	},

    login: (req, res) => {
        res.render('AppLogin'); /*login*/
    },
    register: (req, res) => {
        res.render("AppRegister"); /*register*/
    }
}

module.exports = controlador;