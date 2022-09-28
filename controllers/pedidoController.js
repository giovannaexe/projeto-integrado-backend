const createError = require("http-errors");

const pedido = [
  {
    id: 1,
    pedido_escolhido: "hambúrguer",
    valor: "R$30,00",
    quantidade: "1",
    detalhes: "sem picles"
  },
  {
    id: 2,
    pedido_escolhido: "batata frita",
    valor: "R$15,00",
    quantidade: "1",
    detalhes: "sem sal"
  },
  {
    id: 3,
    pedido_escolhido: "refrigerante",
    valor: "R$5,00",
    quantidade: "1",
    detalhes: "com gelo e limão"
  }
];

function listarPedido(req, res, next) {
  res.json(pedido);
}

function listarPedidoPorId(req, res, next) {
  const localizar = pedido.find((item) => item.id === Number(req.params.id));
  if (!localizar) {
    return res.status(404).json({ msg: "Pedido não encontrado" });
  }
  res.json(localizar);
}
function atualizarPedido(req, res, next) {
    const localizar = pedido.find(
      (pedido) => pedido.id === Number(req.params.id)
    );
    if (!localizar) {
        return res.status(404).json({ msg: "Pedido não encontrado" });
    }
    localizar.pedido_escolhido = req.body.pedido_escolhido;
    localizar.valor = req.body.valor;
    localizar.quantidade = req.body.quantidade;
    localizar.detalhes = req.body.detalhes;
    res.status(200).json({ msg: "Pedido atualizado com sucesso" });
  }
  function criarPedido (req, res, next){
    const novoPedido  = {
    id: pedido[pedido.length-1].id + 1,
    pedido_escolhido: req.body.pedido_escolhido,
    valor: req.body.valor,
    quantidade: req.body.quantidade,
    detalhes: req.body.detalhes
    }
    pedido.push(novoPedido);
    res.status(201).json(novoPedido);
}
function deletarPedido (req, res, next) {
  const localizar = pedido.findIndex(pedido => pedido.id === Number(req.params.id));
  if(localizar < 0){
          return res.status(404).json({msg:"Pedido não encontrado"});
  }
  pedido.splice(localizar, 1);
  res.status(200).json({msg:"Pedido excluído"});
}

module.exports = { listarPedido, listarPedidoPorId, atualizarPedido, criarPedido, deletarPedido };