const Pedido = require('../models/pedidosModel')
const { ObjectId } = require('bson')

async function listarPedido(req, res) {
  await Pedido.find({})
    .then(pedido => {
      return res.json(pedido)
    })
    .catch(error => {
      return res.status(500).json({ error })
    })
}

async function listarPedidoPorId(req, res) {
  await Pedido.findOne({ _id: ObjectId(req.params.id) })
    .then(pedido => {
      if (pedido) return res.json(pedido)
      else return res.status(404).json('Pedido nao localizado')
    })
    .catch(error => {
      return res.status(500).json({ error })
    })
}

async function atualizarPedido(req, res) {
  await Pedido.findOneAndUpdate({ _id: ObjectId(req.params.id) }, req.body, {
    runValidators: true
  })
    .then(pedido => {
      if (pedido) return res.status(204).end()
      else return res.status(404).json('Pedido atualizado com sucesso!')
    })
    .catch(error => {
      return res.status(500).json({ error })
    })
}

async function criarPedido(req, res) {
  const pedido = new Pedido(req.body)
  await pedido
    .save()
    .then(doc => {
      console.log(doc)
      return res.status(201).end()
    })
    .catch(error => {
      const msgErro = {}
      Object.values(error.errors).forEach(({ properties }) => {
        msgErro[properties.path] = properties.message
      })
      return res.status(422).json(msgErro)
    })
}

async function deletarPedido(req, res) {
  await Pedido.findOneAndDelete({ _id: ObjectId(req.params.id) })
    .then(pedido => {
      if (pedido) return res.status(204).end()
      else return res.status(404).json('Pedido não encontrado!')
    })

    .catch(error => {
      return res.status(500).json({ error })
    })
}

module.exports = {
  listarPedido,
  listarPedidoPorId,
  atualizarPedido,
  criarPedido,
  deletarPedido
}
