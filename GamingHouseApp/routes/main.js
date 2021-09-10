const express = require('express');
const router = express.Router();
const routesController = require('../controllers/routesController');

router.get('/', routesController.index);
router.get('/login', routesController.login);
router.get('/register', routesController.register);

module.exports = router;