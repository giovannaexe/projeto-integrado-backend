var express = require('express')

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

var index = require('./routes/indexRouter')
var pedidoRouter = require('./routes/pedidoRouter')

var app = express()

app.use(express.json())

app.use('/API', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use('/', index)

app.use('/pedido', pedidoRouter)

app.use('/criar', pedidoRouter);

app.use('/atualizar', pedidoRouter);

app.use('/deletar', pedidoRouter);

module.exports = app