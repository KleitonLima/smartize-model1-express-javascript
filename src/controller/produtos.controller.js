import { ProdutosServices } from '../services/produtos.service';

const produtosServices = new ProdutosServices();

export class ProdutosControllers {
  async todosProdutos(req, res) {
    try {
      const produtos = await produtosServices.todosProdutos();

      res.send(produtos);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  async produtoPorId(req, res) {
    const id = req.params.id;
    const produto = await produtosServices.produtoPorId(id);

    res.send(produto);
  }

  async criarNovoProduto(req, res) {
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

    const novoProduto = await produtosServices.criarNovoProduto(
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

  async atualizarProduto(req, res) {
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

    const produtoAtualizado = await produtosServices.atualizarProduto(
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

    res.send(produtoAtualizado);
  }

  deletarProduto(req, res) {
    const id = req.params.id;
    produtosServices.deletarProduto(id);

    res.sendStatus(204);
  }
}
