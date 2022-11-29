const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pedidoSchema = new Schema({
  pedido_escolhido: {
    type: String,
    required: [true, 'Informe o seu pedido'],
    trim: true
  },
  valor: {
    type: String,
    required: [true, 'Qual o valor do pedido?'],
    trim: true
  },
  quantidade: {
    type: String,
    required: [true, 'Quantos você deseja'],
    trim: true
  },
  detalhes: {
    type: String,
    required: [true, 'Alguma restrição?'],
    trim: true
  }
})

module.exports = mongoose.model('Pedidos', pedidoSchema)
