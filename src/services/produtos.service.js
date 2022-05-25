import { Produto } from '../models/produtos.model';

export class ProdutosServices {
  async todosProdutos() {
    const produtos = await Produto.find();

    if (produtos.length === 0) {
      throw { status: 404, message: 'Nenhum produto cadastrado' };
    }

    return produtos;
  }

  async produtoPorId(id) {
    const atualProduto = await Produto.findById(id);

    return atualProduto;
  }

  async criarNovoProduto(
    tipo,
    marca,
    modelo,
    descricao,
    cor,
    condicao,
    foto,
    preco,
    garantia,
  ) {
    const novoProduto = {
      tipo,
      marca,
      modelo,
      descricao,
      cor,
      condicao,
      foto,
      preco,
      garantia,
    };

    const produto = await Produto.create(novoProduto);
    return produto;
  }

  async atualizarProduto(
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
  ) {
    const produtoAtualizado = {
      tipo,
      marca,
      modelo,
      descricao,
      cor,
      condicao,
      foto,
      preco,
      garantia,
    };

    const produto = await Produto.updateOne({ _id: id }, produtoAtualizado);

    return produto;
  }

  async deletarProduto(id) {
    await Produto.deleteOne({ _id: id });
  }
}
