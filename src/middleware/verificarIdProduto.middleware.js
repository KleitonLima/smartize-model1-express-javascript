import { produtos } from '../databases';

export const verificarIdProdutoMiddleware = (req, res, next) => {
  const id = +req.params.id;
  const atualProduto = produtos.find((elem) => elem.id === id);

  if (!atualProduto) {
    return res.status(404).send('Produto não encontrado!');
  }
  next();
};
