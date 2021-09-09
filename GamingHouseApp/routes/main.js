const express = require('express');
const router = express.Router();
const routesController = require('../controllers/routesController');

router.get('/', routesController.index);
router.get('/carrito', routesController.productCart);
router.get('/detalles', routesController.productDetail);
router.get('/agregar', routesController.newProduct);
router.get('/editar', routesController.editProduct);
router.get('/login', routesController.login);
router.get('/register', routesController.register);

module.exports = router;