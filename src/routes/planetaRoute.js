const express = require('express');
const router = express.Router();
const controller = require('../controllers/planetaController');


router.get('/', controller.get);
router.get('/buscarPorId/:id', controller.getById);
router.get('/buscarPorNome/:nome', controller.getByNome);
router.post('/', controller.post);
router.delete('/:id', controller.delete);
router.get('/service', controller.getApi);



module.exports = router;