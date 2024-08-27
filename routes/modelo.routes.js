const express = require('express');
const router = express.Router();

const modelo_controller = require('../controllers/modelo.controller');

router.get('/', modelo_controller.get_modelo);
router.post('/', modelo_controller.post_modelo);

module.exports = router;