const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pedidoSchema = new Schema({
  pedido_escolhido: {
    type: String,
    required: [true, 'Informar nome do pedido'],
    trim: true
  },
  valor: {
    type: String,
    required: [true, 'Informar a data do vencimento'],
    trim: true
  },
  quantidade: {
    type: String,
    required: [true, 'Informar valor'],
    trim: true
  },
  detalhes: {
    type: String,
    required: [true, 'informar se ta pago, pendente ou em atraso'],
    trim: true
  }
})

module.exports = mongoose.model('Pedidos', pedidoSchema)
