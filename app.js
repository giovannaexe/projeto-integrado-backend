var express = require('express')

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')

var index = require('./routes/indexRouter')
var estoqueRouter = require('./routes/pedidoRouter')

var app = express()

app.use(express.json())

app.use('/API', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use('/', index)

app.use('/pedido', estoqueRouter)

app.use('/criar', estoqueRouter);

app.use('/atualizar', estoqueRouter);

app.use('/deletar', estoqueRouter);

module.exports = app