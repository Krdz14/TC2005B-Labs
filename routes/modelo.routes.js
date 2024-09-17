const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

const modelo_controller = require('../controllers/modelo.controller');

router.get('/', isAuth, modelo_controller.get_modelo);
router.post('/', isAuth, modelo_controller.post_modelo);

module.exports = router;