const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controlador = {
    index: (req, res) => {/*Se muestran los productos top (6 de cada categoría)*/
		const topMonitors = products.filter(product => product.section===1 && product.top);
		const topHeadphones = products.filter(product => product.section===2 && product.top);
		const topKeyboards = products.filter(product => product.section===3 && product.top);
		const topMouse = products.filter(product => product.section===4 && product.top);
		const topSpeakers = products.filter(product => product.section===5 && product.top);
		res.render('AppHome', {view: 'home', topMonitors, topHeadphones, topKeyboards, topMouse, topSpeakers});
	},
    isUser: (req, res) => {
        const {email, pass} = req.body;
        let usua = users.find(user=> user.email===email && user.password===pass);
        if(usua){
            res.redirect('/');       
        }
        res.redirect('/login');
    },
    login: (req, res) => {
        res.render('AppLogin'); /*login*/
    },
    register: (req, res) => {
        res.render("AppRegister"); /*register*/
    },
    saveUser: (req, res) => {
        let newUser = {
			id: "u" + (users.length + 1).toString(),
			firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            rol: req.body.rol,
            avatar: req.body.avatar
		};
		users.push(newUser);
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
		res.redirect('/');
    }
}

module.exports = controlador;