const express = require('express')
const router = express.Router()
const pedidoController = require('../controllers/pedidoController')

router.get('/', pedidoController.listarPedido)
router.get('/:id', pedidoController.listarPedido)
router.put('/pedido/:id', pedidoController.atualizarPedido)
router.post('/pedido', pedidoController.criarPedido)
router.delete('/pedido/:id', pedidoController.deletarPedido)

module.exports = router
