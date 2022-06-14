import ProdutosServices from '../services/produtos.service.js';

const produtosServices = new ProdutosServices();

class ProdutosControllers {
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

    const id = req.params.id;

    const produtoAtualizado = await produtosServices.atualizarProduto(
      id,
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

  async deletarProduto(req, res) {
    const id = req.params.id;
    const produto = await produtosServices.deletarProduto(id);

    res.status(200).send(produto);
  }
}

export default ProdutosControllers;
