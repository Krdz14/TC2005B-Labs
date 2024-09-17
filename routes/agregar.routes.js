const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

const sneakers_controller = require('../controllers/sneakers.controller');

router.get('/agregar', isAuth, sneakers_controller.get_agregar);
router.post('/agregar', isAuth, sneakers_controller.post_agregar);
router.get('/:sneakers_id', isAuth, sneakers_controller.get_root)
router.get('/', isAuth, sneakers_controller.get_root);

module.exports = router;