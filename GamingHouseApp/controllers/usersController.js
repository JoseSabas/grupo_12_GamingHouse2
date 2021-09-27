const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
	new: (req, res) => {
		res.render('AppLogin');
	},
	store: (req, res) => {
		let newUser = {
			id: users[users.length - 1].id + 1,
			...req.body
		};
		users.push(newUser);
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
		res.redirect('/');
	},

	edit: (req, res) => {
		let id = req.params.id;
		let user = users.find(user=> user.id == id);
		res.render('AppHome', {view: 'edit', user});
	},
	update: (req, res) => {
		let id = req.params.id;
		let user = users.find(user => user.id == id)

		userToEdit = {
			id: user.id,
			...req.body,
			firstname: user.firstname,
			lastname: user.lastname,
			email: user.email,
        	password: user.password,
			avatar: user.avatar
		};

		let newUsers = users.map(user =>{
			if(user.id == userToEdit.id){
				return userToEdit;
			}
			return user;
		});

		fs.writeFileSync(usersFilePath, JSON.stringify(newUsers, null, ' '));
		res.redirect('/');
	},

	delete: (req, res) => {
		let id = req.params.id;
		let users = users.filter(product => user.id != id);
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
		res.redirect('/');
	}
};

module.exports = controller;