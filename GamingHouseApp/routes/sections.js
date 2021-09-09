const express = require('express');
const router = express.Router();

const productsController = require('../controllers/sectionsController');

router.get('/:id/', productsController.section);

module.exports = router;