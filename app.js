var express = require('express')

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const mongoose = require('mongoose')
const config = require('./config/databaseConfig.json')
var index = require('./routes/indexRouter')
var pedidoRouter = require('./routes/pedidoRouter')
var authRouter = require('./routes/auth')

var app = express()

app.use(express.json())

app.use('/API', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

mongoose
  .connect(config.url)
  .then(
    app.listen(config.porta, () => {
      console.log('API está ON!')
    })
  )
  .catch(error => {
    console.log('Ta errado ai, amigo brother.', error.message)
  })

app.use('/', index)

app.use('/pedido', pedidoRouter)
app.use('/auth', authRouter)

module.exports = app
