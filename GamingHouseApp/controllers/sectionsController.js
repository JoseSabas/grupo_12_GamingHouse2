const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    section: (req, res) => {
		let id = req.params.id;
		let sectionProducts = products.filter(product=> product.section == id)
		res.render('AppHome', {view: 'section', sectionProducts});
	}
};

module.exports = controller;