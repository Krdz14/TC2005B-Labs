const express = require('express');

const router = express.Router();

const sneakers_controller = require('../controllers/sneakers.controller');

router.get('/agregar', sneakers_controller.get_agregar);
router.post('/agregar', sneakers_controller.post_agregar);
router.get('/:sneakers_id', sneakers_controller.get_root)
router.get('/', sneakers_controller.get_root);

module.exports = router;