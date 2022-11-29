const express = require('express')
const router = express.Router()
const pedidoController = require('../controllers/pedidoController')
const autentica = require('../middleware/authMiddleware')

router.get('/', autentica, pedidoController.listarPedido)
router.get('/:id', autentica, pedidoController.listarPedidoPorId)
router.post('/', autentica, pedidoController.criarPedido)
router.put('/:id', autentica, pedidoController.atualizarPedido)
router.delete('/:id', autentica, pedidoController.deletarPedido)

module.exports = router
