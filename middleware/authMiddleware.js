const jwt = require('jsonwebtoken')
const config = require('../config/databaseConfig.json')

module.exports = async function (req, res, next) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({ msg: 'Você precisa do Token de autenticação!' })
  }

  const [tipo, token] = authorization.split(' ')

  if (!token) {
    return res.status(401).json({ erro: 'Você não enviou o token!' })
  }

  const valido = await jwt.verify(token, config.segredo)

  console.log(valido)

  next()
}
