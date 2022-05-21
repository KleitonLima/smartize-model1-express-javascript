import { ProdutosServices } from '../services/produtos.service';

const produtosServices = new ProdutosServices();

export class ProdutosControllers {
  todosProdutos(req, res) {
    const produtos = produtosServices.todosProdutos();
    res.send(produtos);
  }
  produtoPorId(req, res) {
    const { id } = req.params;
    const produto = produtosServices.produtoPorId(id);
    res.send(produto);
  }
}
