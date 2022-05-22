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
  criarNovoProduto(req, res) {
    const {
      tipo,
      marca,
      modelo,
      descricao,
      cor,
      condicao,
      foto,
      preco,
      garantia,
    } = req.body;
    const novoProduto = produtosServices.criarNovoProduto(
      tipo,
      marca,
      modelo,
      descricao,
      cor,
      condicao,
      foto,
      preco,
      garantia,
    );

    res.status(201).send(novoProduto);
  }
}
