import { Produto } from '../models/produtos.model';
import mongoose from 'mongoose';

export const verificarIdProdutoMiddleware = (req, res, next) => {
  const id = req.params.id;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).send("ID inválido!")
  }

  const atualProduto = Produto.findById(id);

  if (!atualProduto) {
    return res.status(404).send('Produto não encontrado!');
  }
  next();
};
