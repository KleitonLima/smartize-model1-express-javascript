import { Produto } from '../models/produtos.model';

export const verificarIdProdutoMiddleware = (req, res, next) => {
  const id = req.params.id;

  const atualProduto = Produto.findById(id);

  if (!atualProduto) {
    return res.status(404).send('Produto não encontrado!');
  }
  next();
};
